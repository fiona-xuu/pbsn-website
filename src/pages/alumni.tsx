
import Header from "@/components/alumni page/Header";
import Hero from "@/components/alumni page/Hero";
import TwentyFour from "@/components/alumni page/2024-2025";
import TwentyThree from "@/components/alumni page/2023-2024";
import TwentyTwo from "@/components/alumni page/2022-2023";
import TwentyOne from "@/components/alumni page/2021-2022";
import Twenty from "@/components/alumni page/2020-2021";
import Nineteen from "@/components/alumni page/2019-2020";
import Eighteen from "@/components/alumni page/2018-2019";
import Seventeen from "@/components/alumni page/2017-2018";
import Sixteen from "@/components/alumni page/2016-2017";
import Fifteen from "@/components/alumni page/2015-2016";
import Fourteen from "@/components/alumni page/2014-2015";
import Thirteen from "@/components/alumni page/2013-2014";

const Alumni = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Header />
            <Hero />
            <TwentyFour />
            <TwentyThree />
            <TwentyTwo />
            <TwentyOne />
            <Twenty />
            <Nineteen />
            <Eighteen />
            <Seventeen />
            <Sixteen />
            <Fifteen />
            <Fourteen />
            <Thirteen />
            {/* Add more years as needed */}

        </div>
    )
};

export default Alumni;