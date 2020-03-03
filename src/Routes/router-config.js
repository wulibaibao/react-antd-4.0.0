import Home from '@pages/Home'
import Article from '@pages/Article'
import ArticleDetails from '@pages/Article/Details'

export default [
    {
        path : '/index',
        name : '首页',
        component : Home
    },
    {
        path : '/article',
        name : '文章列表',
        component : Article,
        children : [
            {
                path : '/page',
                name : '文章详情',
                component : ArticleDetails,
            },
        ]
    },
]