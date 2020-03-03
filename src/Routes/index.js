import React from 'react'

import { BrowserRouter , Switch , Route , Redirect } from 'react-router-dom'

import RouterConfig from './router-config'
import HomeContainer from '@pages/Container' //主页layout组件
import Regist from '@pages/Regist' //注册页
import Login from '@pages/Login' //登录页

const RednerPage = ( Comp ) => <HomeContainer><Comp /></HomeContainer>

const RenderRoute = ( item , path ) => (
    <Route 
        key={ item.name }
        path={ path ? path + item.path : item.path }
        component={ 
            item.children ? 
            () => RenderChildRouter( item , path ? path + item.path : item.path ) : 
            () => RednerPage( item.component )
        }
    />
)

const RenderChildRouter = ( parent , rootPath ) => (
    <Switch>
        <Route path={ parent.path } exact component={ () => RednerPage( parent.component ) } />
        {
            parent.children.map( item => RenderRoute( item , rootPath ))
        }
        <Route component={ () => <Redirect to="/" /> } />
    </Switch>
)

const RenderRouter = () => {
    return (
        <Switch>
            {
                RouterConfig.map( item => RenderRoute( item , '' ) )
            }
            <Route exact component={ () => <Redirect to="/" /> } />
        </Switch>
    )
}

export default props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/regist" component={ Regist } />
                <Route exact path="/" component={ Login } />
                <Route exact path="" component={ () => <RenderRouter /> } />
            </Switch>
        </BrowserRouter>
    )
}