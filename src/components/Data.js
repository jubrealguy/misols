import img1 from "../assets/tosin.jpg";
import img2 from "../assets/adebayo.jpg";

const clients = [
    {
        name: "adejoju oluwatosin",
        image: img1,
        title: "misols gave us a homely home",
        story: "For a long time now, It has been an herculean task getting an interior decoration firm than can style our beautiful home to taste until I made my research and found MISOLS. Our home became more comfy and lovely and extraordinary beautiful. Words cannot say how we feel."
    },
    {
        name: "jubreel adebayo",
        image: img2,
        title: "my office feels like a paradise",
        story: " After so many interior decoration contractors have messed up my workspace. From poor partitions to low quality window blinds and fading flower petals. I started looking for another office space but meeting Gbemisola Alli, the woman behind Misols, the architectural problem of my office space was solved starting with a sheet and right now has been perfectly executed. My office now is a place of bliss."
    },
];

const projects = [
    {
        no: 1,
        title: "lekki mansion",
        list: ["ring pillows", "high quality blinds", "king size beds", "swing chairs", "12 seater sofas"],
        year: "2021"
    },
    {
        no: 2,
        title: "ikeja duplex",
        list: ["ring pillows", "high quality blinds", "large size beds", "high quality curtains", "8 seater sofas"],
        year: "2021"
    },
    {
        no: 3,
        title: "gbagada apartment",
        list: ["throwing pillows", "flower vases", "king size beds", "illuminating shoe rack", "6 seater sofas"],
        year: "2020"
    },
];

const data = {clients, projects}
export default data