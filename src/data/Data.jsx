import Arcade from '../images/icon-arcade.svg'
import Advanced from '../images/icon-advanced.svg'
import Pro from '../images/icon-pro.svg'

export const sidebarData = [
    {
        id:1,
        step: 'step 1',
        action: 'your info',
        link: '/info',
    },

    {
        id:2,
        step: 'step 2',
        action: 'select plan',
        link: '/plan'
    },

    {
        id:3,
        step: 'step 3',
        action: 'add-ons',
        link: '/add-ons'
    },

    {
        id:4,
        step: 'step 4',
        action: 'summary',
        link: '/summary'
    },
]

export const plansData = [
    {
        id: 1,
        image : Arcade,
        title: 'Arcade',
        monthly: 9,
        yearly: 90,

    }, 

    {
        id: 2,
        image : Advanced,
        title: 'Advanced',
        monthly: 12,
        yearly: 120,

    }, 

    {
        id: 3,
        image : Pro,
        title: 'Pro',
        monthly: 15,
        yearly: 150,


    }, 
]

export const addOnData = [
    {
        id: 1,
        title: 'Online service',
        plan: 'Access to multiplayer games',
        monthly: 1,
        yearly: 10,
    },

    {
        id: 2,
        title: ' Larger storage',
        plan: 'Extra 1TB of cloud save',
        monthly: 2,
        yearly: 20,
    },
    

    {
        id: 3,
        title: 'Customizable Profile',
        plan: 'Custom theme on your profile',
        monthly: 2,
        yearly: 20,
    },
    

]