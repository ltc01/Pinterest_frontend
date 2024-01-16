import { FaAngleDown } from "react-icons/fa";
import 'animate.css';

export const Content = () => {

    const imges = {
        img1: [
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        img2: [
            "https://images.unsplash.com/photo-1654764746221-7bc58ef4dbad?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        img3: [
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        ],
        img4: [
            "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        img5: [
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        ],
        img6: [
            "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1654764746221-7bc58ef4dbad?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        img7: [
            "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1604087267213-40e35f1719a3?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    };
    const text = ["DIY idea", "chai time snacks idea", "home decor idea", "outfit idea"];
    const colors = ["red", "blue", "orange", "green"];

    const renderImages = (imageArray) => {
        return imageArray.map((imageUrl, index) => (
            <div className="w-56 h-80 overflow-hidden rounded-2xl" key={index}>
                <img src={imageUrl} alt={`images`} className="w-full h-full object-cover" />
            </div>
        ));
    };

    return (
        <>
            <div className="w-full h-fit" id='content'>
                <div className="h-[75vh] mt-10 overflow-hidden ">
                    <h1 className="text-6xl text-center font-semibold">Get your next</h1>
                    <div className="flex justify-center gap-4">
                        {['mt-0', 'mt-40', 'mt-60', 'mt-96', 'mt-60', 'mt-40', 'mt-0'].map((marginTop, index) => (
                            <div className={`flex w-64 gap-4 flex-col ${marginTop}`} key={index}>
                                {renderImages(imges[`img${index + 1}`])}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center sticky bottom-0 ">
                    <div className="absolute bottom-20 w-full py-3">
                        <a href="#search">
                        <FaAngleDown className="text-white animate__animated animate__shakeY animate__delay-2s animate__infinite mx-auto bg-[#0076d3] rounded-full h-12 p-2 w-fit" />
                        </a>
                    </div>
                    <div className="font-semibold bg-[#fffd93] py-6 w-full text-md">
                        <a href="#search">Here&apos;s how it works <FaAngleDown className="inline" /></a>
                    </div>
                </div>
            </div>
        </>
    );
};


// import { FaAngleDown } from "react-icons/fa";
// import 'animate.css';


// export const Content = () => {

//     const imges = {
//         img1: [
//             "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         ],
//         img2: [
//             "https://images.unsplash.com/photo-1654764746221-7bc58ef4dbad?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         ],
//         img3: [
//             "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//         ],
//         img4: [
//             "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         ],
//         img5: [
//             "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

//         ],
//         img6: [
//             "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1654764746221-7bc58ef4dbad?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         ],
//         img7: [
//             "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1604087267213-40e35f1719a3?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         ]
//     };


//     const text = ["DIY idea", "chai time snacks idea", "home decor idea", "outfit idea"];

//     const color = ["red", "blue", "orange", "green"];

//     return (
//         <div className="w-full h-fit">
//             <div className="h-[75vh] mt-10 overflow-hidden ">
//                 <h1 className="text-6xl text-center font-semibold">Get your next</h1>
//                 <div className="flex justify-center gap-4">
//                     {[0, 40, 60, 96, 60, 40, 0].map((marginTop, index) => (
//                         <div className={`flex w-64 gap-4  flex-col mt-${marginTop}`} key={index}>
//                             {index === 0 && (
//                                 imges.img1.map((i, index) => (
//                                     <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
//                                         <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
//                                     </div>
//                                 )))
//                             }
//                             {index === 1 && (
//                                 imges.img2.map((i, index) => (
//                                     <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
//                                         <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
//                                     </div>
//                                 )))
//                             }
//                             {index === 2 && (
//                                 imges.img3.map((i, index) => (
//                                     <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
//                                         <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
//                                     </div>
//                                 )))
//                             }
//                             {index === 3 && (
//                                 imges.img4.map((i, index) => (
//                                     <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
//                                         <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
//                                     </div>
//                                 )))
//                             }
//                             {index === 4 && (
//                                 imges.img5.map((i, index) => (
//                                     <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
//                                         <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
//                                     </div>
//                                 )))
//                             }
//                             {index === 5 && (
//                                 imges.img6.map((i, index) => (
//                                     <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
//                                         <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
//                                     </div>
//                                 )))
//                             }
//                             {index === 6 && (
//                                 imges.img7.map((i, index) => (
//                                     <div className={`w-56 h-80  overflow-hidden rounded-2xl  `} key={index}>
//                                         <img src={i} alt={`images`} className={`w-full h-full object-cover`} />
//                                     </div>
//                                 )))
//                             }
//                         </div>
//                     ))}
//                 </div>

//             </div>
//             <div className=" text-center sticky bottom-0 ">
//                 <div className="absolute bottom-20 w-full py-3">
//                 <FaAngleDown className="text-white mx-auto bg-[#0076d3] rounded-full h-12 p-2 w-fit" />
//                 </div>
//                 <div className="font-semibold bg-[#fffd93] py-6 w-full text-md">
//                     <a href="#search">Here&apos;s how it works <FaAngleDown className="inline" /></a>
//                 </div>
//             </div>
//         </div>

//     )
// }

