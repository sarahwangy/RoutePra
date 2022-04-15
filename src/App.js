
import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route, Routes, Switch, Navigate } from 'react-router-dom'

// import Home from './pages/Home';  //路由组件
// import About from './pages/About'; //路由组件
import Header from './component/header'; // 一般组件
import MyNavLink from './component/MyNavLink';
import Test from './pages/test/test';

// import News from './pages/Home/news' //路由组件
// import Message from './pages/Home/message' //路由组件
// import Detail from './pages/Home/message/Detail/detail'; //路由组件



//  使用lazy， suspense fallback, 方法，可以懒加载，按需点击加载使用组件， suspense 可以在网络不佳的
// 时候，显示loading 字样

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const News = lazy(() => import('./pages/Home/news'))
const Message = lazy(() => import('./pages/Home/message'))
const Detail = lazy(() => import('./pages/Home/message/Detail/detail'))



// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="row">
//           <div className="col-xs-offset-2 col-xs-8">
//             <Header />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-xs-2 col-xs-offset-2">
//             <div className="list-group">

//               {/* 编写路由 */}
//               {/* <NavLink className="list-group-item" to='/about'>About</NavLink>
//               <NavLink className="list-group-item " to='/home'>Home</NavLink> */}

//               {/* 原生JS 写法 */}
//               {/* <a className="list-group-item" href="./about.html">About</a>
//             <a className="list-group-item active" href="./home.html">Home</a> */}

//               <MyNavLink to="/about">About </MyNavLink>
//               <MyNavLink to="/home">Home </MyNavLink>
//             </div>
//           </div>
//           <div className="col-xs-6">
//             <div className="panel">
//               <div className="panel-body">

//                 {/* 注册路由 */}
//                 {/* <Switch> */}
//                 {/* 不能用Switch  https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element*/}

//                 <Routes>
//                   <Route path="/about" element={<About />} />
//                   <Route path="/home/*" element={<Home />} >
//                     <Route path=":news" element={<News />} />
//                     <Route path=":message/*" element={<Message />} >
//                       <Route path=":detail" element={<Detail />} />
//                     </Route>
//                   </Route>
//                   {/* <Route path="/home" element={<Test />} /> */}

//                   <Route path="/" element={<Navigate to="/about" />} />
//                 </Routes>
//                 {/* </Switch> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }





export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">

            {/* 编写路由 */}
            {/* <NavLink className="list-group-item" to='/about'>About</NavLink>
              <NavLink className="list-group-item " to='/home'>Home</NavLink> */}

            {/* 原生JS 写法 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

            <MyNavLink to="/about" title="About"> </MyNavLink>
            <MyNavLink to="/home" title="Home"> </MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">

              {/* 注册路由 */}
              {/* <Switch> */}
              {/* 不能用Switch  https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element*/}
              <Suspense fallback={<h1>Loading.....</h1>}>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home/*" element={<Home />} >
                    {/* 二级路由 ， 可以写：， 也可以不写 */}
                    <Route path=":news" element={<News />} />
                    <Route path=":message/*" element={<Message />} >
                      <Route path=":detail" element={<Detail />} />
                    </Route>
                  </Route>
                  {/* <Route path="/home" element={<Test />} /> */}

                  <Route path="" element={<Navigate to="/about" />} />
                </Routes>
              </Suspense>
              {/* </Switch> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


