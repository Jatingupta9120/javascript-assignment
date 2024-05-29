const routes = [
  {
    name: 'M1',
    comp: 'C1',
  },
  {
    name: 'M2',
    comp: 'C2',
  },
  {
    name: 'M3',
    subComp: [
      {
        name: 'M3A',
        comp: 'C3A',
      },
      {
        name: 'M3B',
        comp: 'C3B',
      },
    ],
  },
  {
    name: 'M4',
    subComp: [
      {
        name: 'M4A',
        comp: 'C4A',
      },
      {
        name: 'M4B',
        comp: 'C4B',
      },
    ],
  },
  {
    name: 'M5',
    subComp: [
      {
        name: 'M5A',
        comp: 'C5A',
      },
      {
        name: 'M5B',
        subComp: [
          {
            name: 'M5BA',
            comp: 'C5BA',
          },
          {
            name: 'M5BB',
            comp: 'C5BB',
          },
          {
            name: 'M5BC',
            comp: 'C5BC',
          },
        ],
      },
      {
        name: 'M5C',
        comp: 'C5C',
      },
    ],
  },
];

const subscription = [
  {
    name: 'M1',
    isSub: true,
  },
  {
    name: 'M2',
    isSub: false,
  },
  {
    name: 'M3',
    isSub: false,
    subMod: [
      {
        name: 'M3A',
        isSub: true,
      },
      {
        name: 'M3B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M4',
    isSub: true,
    subMod: [
      {
        name: 'M4A',
        isSub: false,
      },
      {
        name: 'M4B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M5',
    isSub: true,
    subMod: [
      {
        name: 'M5A',
        isSub: false,
      },
      {
        name: 'M5B',
        isSub: true,
        subComp: [
          {
            name: 'M5BA',
            isSub: false,
          },
          {
            name: 'M5BB',
            isSub: true,
          },
          {
            name: 'M5BC',
            isSub: false,
          },
        ],
      },
      {
        name: 'M5C',
        isSub: true,
      },
    ],
  },
];

var resultArr = [];

function searchRoute(subscription, Name) {
  for (const subs of subscription) {
    if (subs.name == Name && subs.isSub === true) {
      return true;
    }

    if (subs.subMod) {
      for (const sub of subs.subMod) {
        if (sub.name == Name && sub.isSub === true) return true;
      }
    }

    if (subs.subComp) {
      for (const sub of subs.subComp) {
        if (sub.name == Name && sub.isSub === true) return true;
      }
    }
  }

  return false;
}


function displayResult(routes, subscription) {

  for (const route of routes) {

    let storeRouteObj = route;

    let isCheck = searchRoute(subscription, storeRouteObj.name);

    if (!isCheck) {
      if (storeRouteObj.subComp) delete storeRouteObj.subComp;
      storeRouteObj.comp = 'UN';
      resultArr.push(storeRouteObj);
    } 
    else {
      let flag = 0;
      let redirection;
      if (searchRoute(subscription, storeRouteObj.name)) {
        redirection = storeRouteObj.name;
        flag = 1;
      }

      if (storeRouteObj.subComp) {

        for (const p of storeRouteObj.subComp) {
          if (searchRoute(subscription, p.name)) {
            redirection = p.name;
            flag = 1;
          }
          if (!searchRoute(subscription, p.name)) p.comp = 'UN';
        }
      }
      if (flag == 1 && storeRouteObj.subComp)
        storeRouteObj.subComp.unshift({ redirectTo: redirection });
      else if (flag == 1) resultArr.push({ redirectTo: redirection });

      resultArr.push(storeRouteObj);
    }
  }
}



displayResult(routes, subscription);

let result = JSON.stringify(resultArr);
console.log(result);
