import {SiOpenaigym} from 'react-icons/si'

import IMG1 from './images/p1.jpg'
import IMG2 from './images/p2.jpg'
import IMG3 from './images/p3.jpg'
import IMG4 from './images/p4.jpg'
import IMG5 from './images/p5.jpg'
import IMG6 from './images/p6.jpg'

// Alphhatets
import A from './audios/A.mp3'
import { alphabetSources } from './audio'
//side bar key icons

import Alphabet from './components/learn/Alphabet'
import AsistanceAlphabet from './components/learn/AsistanceAlphabet'
import Characters from './components/learn/Characters'
import Vowel12 from './components/learn/Vowel12'
import Voice6 from './components/learn/Voice6'

import SpecialOne from './components/learn/SpecialOne'
import SpecialTwo from './components/learn/SpecialTwo'
import SpecialThree from './components/learn/SpecialThree'

import SwuntOne from './components/learn/SwuntOne'
import SwuntTwo from './components/learn/SwuntTwo'
import SwuntThree from './components/learn/SwuntThree'


import {FcKey} from 'react-icons/fc'


export const sideBarKeys = [
    {
        name:"ONE",
        icon:'မေꧥႍကႃလိက့်',
        content:<Alphabet  className="learn-div alphabet-session" />,
    },
    {
        name:"TWO",
        icon:'မေꧥႍꩬဵင်ꩼကꧥမ်',
        content:<AsistanceAlphabet  className="learn-div asistance_alphabet-session"/>,
    },
    {
        name:"THREE",
        icon:<FcKey/>,
        content:<Characters  className="learn-div characters-session" />,
    },
    {
        name:"FOUR",
        icon:'မေꧥႍကပ်ငဝ်ႍ',
        content:<Vowel12  className="learn-div vowel-12-session" />,
    },
    {
        name:"FIVE",
        icon:'꧶ꩬဵင်ꩼ',
        content:<Voice6  className="learn-div voice-6-tone" />,
    },
    {
        name:"SIX",
        icon:'ꩬွꩫ်ႍ ဢီ',
        content:<SpecialOne  className="learn-div special-one" />,
    },
    {
        name:"SEVEN",
        icon:'ꩬွꩫ်ႍ ဢူ',
        content:<SpecialTwo  className="learn-div special-two" />,
    },
    {
        name:"EIGHT",
        icon:'ꩬွꩫ်ႍ ဢိုဝ်/꧳',
        content:<SpecialThree  className="learn-div special-three" />,
    },
    {
        name:"NINE",
        icon:'ယ ꩬွꩫ်ႍ',
        content:<SwuntOne  className="learn-div swunt-one" />,
    },
    {
        name:"TEN",
        icon:'ꩺ ꩬွꩫ်ႍ',
        content:<SwuntTwo  className="learn-div swunt-two" />,
    },
    {
        name:"ELEVEN",
        icon:'ဝ ꩬွꩫ်ႍ',
        content:<SwuntThree  className="learn-div swunt-three" />,
    },
]

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Learn",
        path: '/learn'
    },
    {
        name: "Pattern",
        path: '/pattern'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Trainer",
        path: '/trainer'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]


export const faqs = [
    {
        id: 1,
        question: "ꩫိူဝ်ꩼဢုꩫ်လꧥင်း လိက့်တႆးꩫꧥင်းꩬွꩫ်းဢဝ်းလိပ့်ꩥိမ်းꩬီꩼꩫႆႍယဝ်ႍလေး ? ",
        answer: "ဢေႃးၷႃႍ ꩫႆႍယဝ်ႍၷႃႍ ။ ꩫိူဝ်ꩼလုမ်ꧨႃ့ကူႍတီႍတီႍ တႃ့ထႂ်ꩼၷႂꧥးဢူဢူ ꩫိူဝ်ꩼꩫႃႍလိက့်ထႆႍꩬွꩫ်ꩼꩬီꩼ ꩫႆႍယဝ်ႍၷႃႍ ။ ꩬင်ꩼပေႃးၷဝ်ႍၸႂꧥးꩫေꧥႍ ၸွမ်းတုꧧ်းလိပ့်ꩥိမ်းꩬီꩼꩫႆႍၷႃႍၸဝ်ႍ ။"
    },
    {
        id: 2,
        question: "လႆၫးတႆးꩫꧥင်းꩫေꧥႍ ၸၫဝ်းၷိူဝ်းတႆးꩫꧥင်းတင်းလူင်ꩼ မိုꩫ်ꩼကꩫ်းဢူလေး ?",
        answer: "ဢေႃးၸဝ်ႍ တႆးꩫꧥင်း , တႆးလꧥင် , တႆးဒꧥင်း တင်းလူင်ꩼ ဢင်းလႆၫးလိက့်ထႆႍꩫေꧥႍꩬႂꧥꩼ ꩥူမ်ႍကꩫ်းꩥႂꧥႍပေႃးꩬွꩫ်ꩼဢဝ်း ပၫင်းကုမ်းလိက့်လႆၫးတေꩥဵတ်တꧥင်ပၫင်ꩬီꩼ ဢင်းဝေꧥႍၷေႃႍမိုꩫ်ꩼၸႂꧥးယဝ်ႍကေႃႍၷႃႍ။ ပကွပ့်ꩫေꧥႍတင်း ကꩫီးကျႃပႃမလူဝ်ꩬီꩼ ꩬွꩫ်ꩼဢဝ်းပေꧥႍကေႃႍၷႃႍ "
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]



export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "Start Learning Shanni , Tai Laing, Alphabet ",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    }
]


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "လိက့်လႆၫပႆၫးပေ",
        desc: "ꩫမ့်မယင်းပႃးမဢူ လိက့်လႆၫးမယင်းꩫေꧥႍ ၷိူဝ်းမကိုမ်း ။ "
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "ပီႍꩫွင်ႍ",
        desc: "ꩫေႃဢဝ်းမၷိူတ်ပဵꩫ်းမႆႍ , မုꩫ်ဢဝ်းမၷိူတ် ပဵꩫ်းဝႆၫꩼ ၊ ၷဝ်ႍꩬိင်းမၷိူတ် ပဵꩫ်းꩫိူꩫ်း , ပီႍꩫွင်ႍၷႃꩼမၷိူတ် ပဵꩫ်းပိူꩫ်ႍ ။"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "လႆၫး",
        desc: "ꩫူက်ႍယုင်းတႆၫးꩫေေꧥႍ ကိုတ်ဝေꧥႍ ၷုꩫ်ꩼ , ꧤိင်ႍတႆၫး ကိုတ်ဝေꧥႍ ၷျီ , ꩬိူဝ်ꩼတႆၫးꩫေꧥႍ ကိုတ်ဝေꧥႍ လႆၫး "
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "ꩬဵင်ꩼ",
        desc: "လၫပ်ꧤႃႍꩫေꧥႍꩥႂꧥႍဢိင်းꩬꩫ်ꩼ , တၫꩫ်ႍၷႂၫမ်းꩫေꧥႍ ဢိင်းပေႃႍဢိင်းမေꧥႍ ။ "
    }
]


export const  portfolios = [
    {
        id:1,
        image:IMG1,
        title:"Tha-Ma-Nae Competation",
        github:"https://github.com",
        demo:"https://dribbble.com/",
    },
    {
        id:2,
        image:IMG2,
        title:"Record Teaching-Aids",
        github:"https://github.com",
        demo:"https://dribbble.com/",
    },
    {
        id:3,
        image:IMG3,
        title:"Garden Fields",
        github:"https://github.com",
        demo:"https://dribbble.com/",
    },
    {
        id:4,
        image:IMG4,
        title:"Record Volunteeer",
        github:"https://github.com",
        demo:"https://dribbble.com/",
    },
    {
        id:5,
        image:IMG5,
        title:"2nd time, Marathoon race",
        github:"https://github.com",
        demo:"https://dribbble.com/",
    },
    {
        id:6,
        image:IMG6,
        title:"V-log Travelling",
        github:"https://github.com",
        demo:"https://dribbble.com/",
    },
];


export const  alphabets = [
    {
        name:"က",
        source:alphabetSources.aA,
        id:"A-1"
    },
    {
        name:"ၷ",
        source:alphabetSources.bB,
        id:"B-1"
    },
    {
        name:"င",
        source:alphabetSources.cC,
        id:"C-1"
    },
    {
        name:"ၸ",
        source:alphabetSources.dD,
        id:"D-1"
    },
    {
        name:"ꩬ",
        source:alphabetSources.eE,
        id:"E-1"
    },
    {
        name:"ꧧ",
        source:alphabetSources.fF,
        id:"F-1"
    },
    {
        name:"တ",
        source:A,
        id:"G-1"
    },
    {
        name:"ထ",
        source:A,
        id:"H-1"
    },
    {
        name:"ꩫ",
        source:A,
        id:"I-1"
    },
    {
        name:"ပ",
        source:A,
        id:"J-1"
    },
    {
        name:"ꧤ",
        source:A,
        id:"K-1"
    },
    {
        name:"မ",
        source:A,
        id:"L-1"
    },
    {
        name:"ယ",
        source:A,
        id:"O-1"
    },
    {
        name:"ꩺ",
        source:A,
        id:"P-1"
    },
    {
        name:"လ",
        source:A,
        id:"Q-1"
    },
    {
        name:"ဝ",
        source:A,
        id:"R-1"
    },
    {
        name:"ꩥ",
        source:A,
        id:"S-1"
    },
    {
        name:"ဢ",
        source:A,
        id:"T-1"
    },
]

export const asistanceAlphabets = [
    {
        name:"Z",
        source:A,
        id:"Z-1"
    },
    {
        name:"Y",
        source:A,
        id:"Y-1"
    },
    {
        name:"X",
        source:A,
        id:"X-1"
    },
    {
        name:"W",
        source:A,
        id:"W-1"
    },
    {
        name:"V",
        source:A,
        id:"V-1"
    },
]

export const characters = [
    {
        name:"ႃ",
        source:A,
        desc:"ၷျႃး",
        id:"a-1"
    },
    {
        name:"ၫ",
        source:A,
        desc:"ၷျႃးပွတ်",
        id:"b-1"
    },
    {
        name:"ိ",
        source:A,
        desc:"တၫင်ꩫိူဝ်ꩼ ",
        id:"c-1"
    },
    {
        name:"ီ",
        source:A,
        desc:"တၫင်ၷတ်ကျꧥꩫ်း",
        id:"d-1"
    },
    {
        name:"ု",
        source:A,
        desc:"တိုတ်ꩫိုင်ႍ",
        id:"e-1"
    },
    {
        name:"ူ",
        source:A,
        desc:"တိုတ်ꩬွင်ꩼ",
        id:"a-1"
    },
    {
        name:"ို",
        source:A,
        desc:"တိုတ်တၫင်",
        id:"b-1"
    },
    {
        name:"ိူ",
        source:A,
        desc:"တိုတ်ꩬွင်ꩼတၫင်",
        id:"c-1"
    },
    {
        name:"ေ",
        source:A,
        desc:"ꩥိုပ်ႍ",
        id:"d-1"
    },
    {
        name:"ဵ",
        source:A,
        desc:"ꩥိုပ့်တၫင်",
        id:"e-1"
    },
    {
        name:"ꧥ",
        source:A,
        desc:"ꧤၫက့်ꩫိူဝ်ꩼ",
        id:"d-1"
    },
    {
        name:"ႆ",
        source:A,
        desc:"ကႆၫၷိူꩫ်ႍ",
        id:"e-1"
    },
    {
        name:"ံ",
        source:A,
        desc:"ၸမ်ႍꩫိူဝ်ꩼ",
        id:"e-1"
    },
    {
        name:"ႂ",
        source:A,
        desc:"ကႂႆၫႍ",
        id:"e-1"
    },
    {
        name:"ွ",
        source:A,
        desc:"ꩥွႆႍ",
        id:"e-1"
    },
    {
        name:"ျ",
        source:A,
        desc:"ကျလ",
        id:"e-1"
    },
    {
        name:"ြ",
        source:A,
        desc:"ꩥွပ်",
        id:"e-1"
    },
]
export const vowel12 = [
    {
        name:"ဢ",
        source:A,
        id:"A-1"
    },
    {
        name:"ဢႃ",
        source:A,
        id:"B-1"
    },
    {
        name:"ဢိ",
        source:A,
        id:"C-1"
    },
    {
        name:"ဢီ",
        source:A,
        id:"D-1"
    },
    {
        name:"ဢေ",
        source:A,
        id:"E-1"
    },
    {
        name:"ဢေꧥ",
        source:A,
        id:"F-1"
    },
    {
        name:"ဢု",
        source:A,
        id:"G-1"
    },
    {
        name:"ဢူ",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢူဝ်",
        source:A,
        id:"I-1"
    },
    {
        name:"ဢေႃ",
        source:A,
        id:"J-1"
    },
    {
        name:"ဢိုဝ်",
        source:A,
        id:"J-1"
    },
    {
        name:"ဢိူဝ်",
        source:A,
        id:"J-1"
    },
]

export const voice6Tone = [
    {
        name:"ဢႃ",
        source:A,
        desc:"ꩬဵင်ꩼကဝ်",
        id:"a-1"
    },
    {
        name:"ႍ",
        source:A,
        desc:"ꩬဵင်ꩼတႂꧥႍ",
        id:"b-1"
    },
    {
        name:"ꩼ",
        source:A,
        desc:"ꩬဵင်ꩼꩫိူဝ်ꩼ ",
        id:"c-1"
    },
    {
        name:"း",
        source:A,
        desc:"ၸမ်ႍꩫႃႍ",
        id:"d-1"
    },
    {
        name:"့",
        source:A,
        desc:"ၸမ်ႍတႂꧥꩼ",
        id:"d-1"
    },
    {
        name:"ꩽ",
        source:A,
        desc:"ꩬဵင်ꩼꩬိုဝ်",
        id:"d-1"
    },
]

export const specialOne = [
    {
        name:"ဢႆ",
        source:A,
        desc:"ဢ+ဢီ = ဢႆ",
        id:"a-1"
    },
    {
        name:"ဢႆၫ",
        source:A,
        desc:"ဢႃ+ဢီ = ဢႆၫ",
        id:"b-1"
    },
    {
        name:"ဢုꧧ်",
        source:A,
        desc:"ဢူ+ဢီ = ꧧုꧧ်",
        id:"c-1"
    },
    {
        name:"ဢူꧧ်",
        source:A,
        desc:"ဢူဝ်+ဢီ = ꧧူꧧ်",
        id:"d-1"
    },
    {
        name:"ဢွႆ",
        source:A,
        desc:"ဢေႃ+ဢီ =ဢွႆ",
        id:"d-1"
    },
    {
        name:"ဢိုꧧ်",
        source:A,
        desc:"ဢိုဝ်+ဢီ = ဢိုꧧ်",
        id:"d-1"
    },
    {
        name:"ဢိူꧧ်",
        source:A,
        desc:"ဢိူဝ်+ဢီ = ဢိူꧧ်",
        id:"d-1"
    },
]

export const specialTwo = [
    {
        name:"ဢဝ်",
        source:A,
        desc:"ဢ+ဢူ = ဢဝ်",
        id:"a-1"
    },
    {
        name:"ဢၫဝ်",
        source:A,
        desc:"ဢႃ+ဢူ = ဢၫဝ်",
        id:"b-1"
    },
    {
        name:"ဢိဝ်",
        source:A,
        desc:"ဢီ+ဢူ = ဢိဝ်",
        id:"c-1"
    },
    {
        name:"ဢဵဝ်",
        source:A,
        desc:"ဢေ+ဢူ = ဢဵဝ်",
        id:"d-1"
    },
    {
        name:"ဢꧥဝ်",
        source:A,
        desc:"ဢေꧥ+ဢူ =ဢꧥဝ်",
        id:"d-1"
    },
    
]

export const specialThree = [
    {
        name:"ျ",
        source:A,
        desc:"ယ ꩬွꩫ်ႍ",
        id:"a-1"
    },
    {
        name:"ြ",
        source:A,
        desc:"ꩺ ꩬွꩫ်ႍ",
        id:"b-1"
    },
    {
        name:"ႂ",
        source:A,
        desc:"ဝ ꩬွꩫ်ႍ",
        id:"c-1"
    },
]


export const swuntOne = [
    {
        name:"ကျ",
        source:A,
        desc:"က+ယ = ကျ",
        id:"a-1"
    },
    {
        name:"ၷျ",
        source:A,
        desc:"ၷ+ယ = ၷျ",
        id:"b-1"
    },
    {
        name:"ပျ",
        source:A,
        desc:"ပ + ယ = ပျ",
        id:"c-1"
    },
    {
        name:"ꧤျ",
        source:A,
        desc:"ꧤ + ယ = ꧤျ",
        id:"c-1"
    },
]

export const swuntTwo = [
    {
        name:"ꩬြ",
        source:A,
        desc:"ꩬ+ꩺ = ꩬြ",
        id:"a-1"
    },
    {
        name:"တြ",
        source:A,
        desc:"တ+ꩺ = တြ",
        id:"b-1"
    },
    {
        name:"ꧤြ",
        source:A,
        desc:"ꧤ + ꩺ = ꧤြ",
        id:"c-1"
    },
    
]


export const swuntThree = [
    {
        name:"ကႂ",
        source:A,
        desc:"က+ဝ = ကႂ",
        id:"a-1"
    },
    {
        name:"ၷႂ",
        source:A,
        desc:"ၷ+ဝ = ၷႂ",
        id:"b-1"
    },
    {
        name:"တႂ",
        source:A,
        desc:"တ + ဝ = တႂ",
        id:"c-1"
    },
    
]


export const pattenOne = [
    {
        name:"ဢမ်",
        source:A,
        id:"A-1"
    },
    {
        name:"ဢၫမ်",
        source:A,
        id:"B-1"
    },
    {
        name:"ဢိမ်",
        source:A,
        id:"C-1"
    },
    {
        name:"ဢဵမ်",
        source:A,
        id:"D-1"
    },
    {
        name:"ဢꧥမ်",
        source:A,
        id:"E-1"
    },
    {
        name:"ဢုမ်",
        source:A,
        id:"F-1"
    },
    {
        name:"ဢူမ်",
        source:A,
        id:"G-1"
    },
    {
        name:"ဢွမ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိုမ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိူမ်",
        source:A,
        id:"H-1"
    },
]

export const pattenTwo = [
    {
        name:"ဢꩫ်",
        source:A,
        id:"A-1"
    },
    {
        name:"ဢၫꩫ်",
        source:A,
        id:"B-1"
    },
    {
        name:"ဢိꩫ်",
        source:A,
        id:"C-1"
    },
    {
        name:"ဢဵꩫ်",
        source:A,
        id:"D-1"
    },
    {
        name:"ဢꧥꩫ်",
        source:A,
        id:"E-1"
    },
    {
        name:"ဢုꩫ်",
        source:A,
        id:"F-1"
    },
    {
        name:"ဢူꩫ်",
        source:A,
        id:"G-1"
    },
    {
        name:"ဢွꩫ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိုꩫ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိူꩫ်",
        source:A,
        id:"H-1"
    },
]

export const pattenThree = [
    {
        name:"ဢင်",
        source:A,
        id:"A-1"
    },
    {
        name:"ဢၫင်",
        source:A,
        id:"B-1"
    },
    {
        name:"ဢိင်",
        source:A,
        id:"C-1"
    },
    {
        name:"ဢဵင်",
        source:A,
        id:"D-1"
    },
    {
        name:"ဢꧥင်",
        source:A,
        id:"E-1"
    },
    {
        name:"ဢုင်",
        source:A,
        id:"F-1"
    },
    {
        name:"ဢူင်",
        source:A,
        id:"G-1"
    },
    {
        name:"ဢွင်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိုင်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိူင်",
        source:A,
        id:"H-1"
    },
]

export const pattenFour = [
    {
        name:"ဢတ်",
        source:A,
        id:"A-1"
    },
    {
        name:"ဢၫတ်",
        source:A,
        id:"B-1"
    },
    {
        name:"ဢိတ်",
        source:A,
        id:"C-1"
    },
    {
        name:"ဢဵတ်",
        source:A,
        id:"D-1"
    },
    {
        name:"ဢꧥတ်",
        source:A,
        id:"E-1"
    },
    {
        name:"ဢုတ်",
        source:A,
        id:"F-1"
    },
    {
        name:"ဢူတ်",
        source:A,
        id:"G-1"
    },
    {
        name:"ဢွတ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိုတ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိူတ်",
        source:A,
        id:"H-1"
    },
]

export const pattenFive = [
    {
        name:"ဢပ်",
        source:A,
        id:"A-1"
    },
    {
        name:"ဢၫပ်",
        source:A,
        id:"B-1"
    },
    {
        name:"ဢိပ်",
        source:A,
        id:"C-1"
    },
    {
        name:"ဢဵပ်",
        source:A,
        id:"D-1"
    },
    {
        name:"ဢꧥပ်",
        source:A,
        id:"E-1"
    },
    {
        name:"ဢုပ်",
        source:A,
        id:"F-1"
    },
    {
        name:"ဢူပ်",
        source:A,
        id:"G-1"
    },
    {
        name:"ဢွပ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိုပ်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိူပ်",
        source:A,
        id:"H-1"
    },
]

export const pattenSix = [
    {
        name:"ဢက်",
        source:A,
        id:"A-1"
    },
    {
        name:"ဢၫက်",
        source:A,
        id:"B-1"
    },
    {
        name:"ဢိက်",
        source:A,
        id:"C-1"
    },
    {
        name:"ဢဵက်",
        source:A,
        id:"D-1"
    },
    {
        name:"ဢꧥက်",
        source:A,
        id:"E-1"
    },
    {
        name:"ဢုက်",
        source:A,
        id:"F-1"
    },
    {
        name:"ဢူက်",
        source:A,
        id:"G-1"
    },
    {
        name:"ဢွက်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိုက်",
        source:A,
        id:"H-1"
    },
    {
        name:"ဢိူက်",
        source:A,
        id:"H-1"
    },
]

export const numbers = [
    {
        name:"꧱",
        source:A,
        desc:"ꩫိုင်ႍ",
        id:"a-1"
    },
    {
        name:"꧲",
        source:A,
        desc:"ꩬွင်ꩼ",
        id:"b-1"
    },
    {
        name:"꧳",
        source:A,
        desc:"ꩬၫမ်ꩼ ",
        id:"c-1"
    },
    {
        name:"꧴",
        source:A,
        desc:"ꩬီ",
        id:"d-1"
    },
    {
        name:"꧵",
        source:A,
        desc:"ꩥႃႍ",
        id:"d-1"
    },
    {
        name:"꧶",
        source:A,
        desc:"ꩥူက်",
        id:"d-1"
    },
    {
        name:"꧷",
        source:A,
        desc:"ၸဵတ်",
        id:"d-1"
    },
    {
        name:"꧸",
        source:A,
        desc:"ပꧥတ်",
        id:"d-1"
    },
    {
        name:"꧹",
        source:A,
        desc:"ကဝ်ႍ",
        id:"d-1"
    },
    {
        name:"꧱꧰",
        source:A,
        desc:"ꩬိပ်",
        id:"d-1"
    },
    {
        name:"꧰",
        source:A,
        desc:"ပဝ်",
        id:"d-1"
    },

    {
        name:"꧱꧱",
        source:A,
        desc:"ꩬိပ်ဢဵတ်",
        id:"d-1"
    },
    {
        name:"꧱꧲",
        source:A,
        desc:"ꩬိပ်ꩬွင်ꩼ ",
        id:"d-1"
    },
    {
        name:"꧲꧰",
        source:A,
        desc:"ꩬၫဝ်း/ꩬၫဝ်းꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧲꧱",
        source:A,
        desc:"ꩬၫဝ်းဢဵတ်",
        id:"d-1"
    },
    {
        name:"꧲꧲",
        source:A,
        desc:"ꩬၫဝ်းꩬွင်ꩼ",
        id:"d-1"
    },
    {
        name:"꧳꧰",
        source:A,
        desc:"ꩬၫမ်ꩼꩬိပ်",
        id:"d-1"
    },
    {
        name:"꧸꧱",
        source:A,
        desc:"ပꧥတ်ꩬိပ်ဢဵတ်",
        id:"d-1"
    },
    {
        name:"꧹꧰",
        source:A,
        desc:"ကဝ်ꩬိပ်",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰",
        source:A,
        desc:"ပၫက်/ပၫက်ꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧲꧰꧰",
        source:A,
        desc:"ꩬွင်ꩼပၫက်",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰꧰",
        source:A,
        desc:"ꩥဵင်ꩼ / ꩥဵင်ꩼꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧶꧰꧰꧰",
        source:A,
        desc:"ꩥူက်ꩥဵင်ꩼ",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰꧰꧰",
        source:A,
        desc:"မိူꩫ်ႍ / မိူꩫ်ႍꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧱꧸꧵꧰꧰",
        source:A,
        desc:"မိူꩫ်ႍပꧥတ်ꩥဵင်ꩼꩥႃႍပၫက်",
        id:"d-1"
    },
    {
        name:"꧲꧰꧰꧰꧰꧰",
        source:A,
        desc:"ꩬွင်ꩼꩬꧥꩫ်ꩼ",
        id:"d-1"
    },
    {
        name:"꧵꧶꧰꧰꧰꧰",
        source:A,
        desc:"ꩥႃႍꩬꧥꩫ်ꩼꩥူက်မိူꩫ်ႍ",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰꧰꧰꧰꧰",
        source:A,
        desc:"လၫꩫ့်/ လၫꩫ့်ꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧸꧰꧰꧰꧰꧰꧰",
        source:A,
        desc:"ပꧥတ်လၫꩫ့်",
        id:"d-1"
    },
]

export const sixVoiceOne = [
    {
        id:1,
        name:'ဢမ်',
        source:A,
    },
    {
        id:2,
        name:'ဢမ်ႍ',
        source:A,
    },
    {
        id:3,
        name:'ဢမ်ꩼ',
        source:A,
    },
    {
        id:4,
        name:'ဢမ်း',
        source:A,
    },
    {
        id:5,
        name:'ဢမ့်',
        source:A,
    },
    {
        id:6,
        name:'ဢမ်ꩽ',
        source:A,
    },
]


export const sixVoiceTwo = [
    {
        id:1,
        name:'ဢꩫ်',
        source:A,
    },
    {
        id:2,
        name:'ဢꩫ်ႍ',
        source:A,
    },
    {
        id:3,
        name:'ဢꩫ်ꩼ',
        source:A,
    },
    {
        id:4,
        name:'ဢꩫ်း',
        source:A,
    },
    {
        id:5,
        name:'ဢꩫ့်',
        source:A,
    },
    {
        id:6,
        name:'ဢꩫ်ꩽ',
        source:A,
    },
]


export const sixVoiceThree = [
    {
        id:1,
        name:'ဢင်',
        source:A,
    },
    {
        id:2,
        name:'ဢင်ႍ',
        source:A,
    },
    {
        id:3,
        name:'ဢင်ꩼ',
        source:A,
    },
    {
        id:4,
        name:'ဢင်း',
        source:A,
    },
    {
        id:5,
        name:'ဢင့်',
        source:A,
    },
    {
        id:6,
        name:'ဢင်ꩽ',
        source:A,
    },
]


export const sixVoiceFour = [
    {
        id:1,
        name:'ဢတ်',
        source:A,
    },
    {
        id:2,
        name:'ဢတ်ႍ',
        source:A,
    },
    {
        id:3,
        name:'ဢတ်ꩼ',
        source:A,
    },
    {
        id:4,
        name:'ဢတ်း',
        source:A,
    },
    {
        id:5,
        name:'ဢတ့်',
        source:A,
    },
    {
        id:6,
        name:'ဢတ်ꩽ',
        source:A,
    },
]


export const sixVoiceFive = [
    {
        id:1,
        name:'ဢပ်',
        source:A,
    },
    {
        id:2,
        name:'ဢပ်ႍ',
        source:A,
    },
    {
        id:3,
        name:'ဢပ်ꩼ',
        source:A,
    },
    {
        id:4,
        name:'ဢပ်း',
        source:A,
    },
    {
        id:5,
        name:'ဢပ့်',
        source:A,
    },
    {
        id:6,
        name:'ဢပ်ꩽ',
        source:A,
    },
]

export const sixVoiceSix = [
    {
        id:1,
        name:'ဢက်',
        source:A,
    },
    {
        id:2,
        name:'ဢက်ႍ',
        source:A,
    },
    {
        id:3,
        name:'ဢက်ꩼ',
        source:A,
    },
    {
        id:4,
        name:'ဢက်း',
        source:A,
    },
    {
        id:5,
        name:'ဢက့်',
        source:A,
    },
    {
        id:6,
        name:'ဢက်ꩽ',
        source:A,
    },
]

export const about = [
    {
        id: 1,
        question: "ꩫိူဝ်ꩼဢုꩫ်လꧥင်း လိက့်တႆးꩫꧥင်းꩬွꩫ်းဢဝ်းလိပ့်ꩥိမ်းꩬီꩼꩫႆႍယဝ်ႍလေး ? ",
        answer: "ဢေႃးၷႃႍ ꩫႆႍယဝ်ႍၷႃႍ ။ ꩫိူဝ်ꩼလုမ်ꧨႃ့ကူႍတီႍတီႍ တႃ့ထႂ်ꩼၷႂꧥးဢူဢူ ꩫိူဝ်ꩼꩫႃႍလိက့်ထႆႍꩬွꩫ်ꩼꩬီꩼ ꩫႆႍယဝ်ႍၷႃႍ ။ ꩬင်ꩼပေႃးၷဝ်ႍၸႂꧥးꩫေꧥႍ ၸွမ်းတုꧧ်းလိပ့်ꩥိမ်းꩬီꩼꩫႆႍၷႃႍၸဝ်ႍ ။"
    },
    {
        id: 2,
        question: "လႆၫးတႆးꩫꧥင်းꩫေꧥႍ ၸၫဝ်းၷိူဝ်းတႆးꩫꧥင်းတင်းလူင်ꩼ မိုꩫ်ꩼကꩫ်းဢူလေး ?",
        answer: "ဢေႃးၸဝ်ႍ တႆးꩫꧥင်း , တႆးလꧥင် , တႆးဒꧥင်း တင်းလူင်ꩼ ဢင်းလႆၫးလိက့်ထႆႍꩫေꧥႍꩬႂꧥꩼ ꩥူမ်ႍကꩫ်းꩥႂꧥႍပေႃးꩬွꩫ်ꩼဢဝ်း ပၫင်းကုမ်းလိက့်လႆၫးတေꩥဵတ်တꧥင်ပၫင်ꩬီꩼ ဢင်းဝေꧥႍၷေႃႍမိုꩫ်ꩼၸႂꧥးယဝ်ႍကေႃႍၷႃႍ။ ပကွပ့်ꩫေꧥႍတင်း ကꩫီးကျႃပႃမလူဝ်ꩬီꩼ ꩬွꩫ်ꩼဢဝ်းပေꧥႍကေႃႍၷႃႍ "
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 7,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 8,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 9,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 10,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 11,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 12,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]
