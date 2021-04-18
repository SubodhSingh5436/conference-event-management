// import axios from "./axios";

class Speaker {
    async getAll() {
        try {

            let data = [
                {
                    _id: 2,
                    name: "ঝংকার মাহবুব",
                    designation: "CEO at Programmming Hero",
                    image: "https://ds.rokomari.store/rokomari110/people/f05844bf5ab4_40266.jpg",
                    bio: "আমি একজন সাধারণ বাংলাদেশী। খাই দাই ঘুমাই। চান্স পাইলে লম্বা লম্বা বুলি আওড়াই। পরবাসে কামলা খাটি। উৎসবের দিনগুলিতে দেশকে একটু বেশি মিস করি। "
                },
                {
                    _id: 3,
                    name: "তামিম শাহরিয়ার সুবিন",
                    designation: "CEO at Mukto Software Ltd",
                    image: "https://ds.rokomari.store/rokomari110/people/dde5596a8494_4207.jpg",
                    bio: "১৯৮২ সালের ৭ নভেম্বর ময়মনসিংহে জন্ম নেওয়া তামিম শাহরিয়ার সুবিন পেশায় একজন সফটওয়্যার ইঞ্জিনিয়ার। তার শিক্ষাজীবন শুরু হয় হোমনা সরকারি প্রাথমিক বিদ্যালয়ে। অতঃপর এ কে উচ্চ বিদ্যালয় ও নটরডেম কলেজে পড়া শেষে শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ে কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিষয়ে পড়াশোনে শেষ করেন। সরকারি কর্মকর্তার ঘরে জন্ম নেওয়া সুবিনের প্রধান আকর্ষণ প্রোগ্রামিংকে ঘিরে। তিনি প্রোগ্রামিং বিষয়ক প্রায় পাঁচশোটি সমস্যা বিশ্ববিদ্যালয়ে থাকাকালে সমাধান করেছেন। নানা ভাষায় কোডিং করতে পারলেও তার পছন্দের প্রোগ্রামিং ভাষা পাইথন। তবে তার শখ লেখালিখি এবং ভ্রমণ। শখ এবং আগ্রহের বস্তুকে এক বিন্দুতে মিলিয়ে সুবিন লিখে ফেলেছেন বেশ কয়েকটি বই। তামিম শাহরিয়ার সুবিন এর বই সমূহ’র বিষয়বস্তু হলো কম্পিউটার প্রোগ্রামিং, যার বেশিরভাগ বাংলা ভাষায় লিখিত। কীভাবে বাংলা ভাষাভাষী মানুষের কম্পিউটার প্রোগ্রামিং বিষয়ে জড়তা দূর করা যায় সে ভাবনা থেকেই তিনি বাংলায় প্রোগ্রামিং বিষয়ক বই লেখা শুরু করেন। সহজ, সাবলীল ভাষায় লেখা বলে তামিম শাহরিয়ার সুবিন এর বই পাঠকের আত্মস্থ করতে বেগ পেতে হয় না। তামীম শাহরিয়ার সুবিন এর বই সমগ্র এর মাঝে তাই দেখতে পাওয়া যায় প্রোগ্রামিং গাইডলাইন, পাইথন দিয়ে প্রোগ্রামিং ও গণিতের মতো খটমটে বিষয়ের উপস্থিতি। তিনি বাংলাদেশে থাকাকালে মুক্ত সফটওয়্যার লিমিটেড ও দ্বিমিক কম্পিউটিং নামক দুটি প্রতিষ্ঠান গড়ে তোলেন। বাংলাদেশ গণিত অলিম্পিয়াডের একজন একাডেমিক কাউন্সিলর হিসেবেও নিয়োজিত রয়েছেন। বর্তমানে তিনি সপরিবারে সিঙ্গাপুরে বসবাস করছেন।"
                },
                {
                    _id: 4,
                    name: "এইচ এম নাঈম",
                    designation: "CEO at Stack Learner Youtube Channel",
                    image: "https://ds.rokomari.store/rokomari110/people/d0ed92ff2_80898.jpg",
                    bio: "আমি HM Nayem (Hasan Mahmud Nayem), সফটওয়্যার ইঞ্জিনিয়ারিং এর শিক্ষার্থী এবং একজন প্রোফেশনাল ওয়েব অ্যাপ্লিকেশন ডেভেলপার। আমি ২০১৭ সাল থেকে অনলাইনে ইউটিউবের মাধ্যমে আমার জ্ঞান বিতরণ করে আসছি। Stack Learner নামের একটি জনপ্রিয় এডুকেশন প্লাটফর্ম এবং Stack Solution নামের একটি স্টার্টাপ সফটওয়্যার কোম্পানি আমি প্রতিষ্টা করেছি। আমার ভালো লাগে শিখতে, জানতে এবং জানাতে। আমি সব সময় নতুন কিছু নিয়ে কাজ করতে পছন্দ করি, নতুন কিছু শিখতে পছন্দ করি এবং নিজের জ্ঞান গুলো মানুষের মাঝে ছড়িয়ে দিয়ে স্বর্গীয় তৃপ্তি উপলব্ধি করি। এই দেশ, এই দেশের মানুষ নিয়ে আমার অনেক স্বপ্ন। তিল তিল করে সেই স্বপ্ন পূরণের উদ্দেশ্যে আমি কাজ করে যাচ্ছি।"
                }
            ]
            // let { data } = await axios.get(`/speaker`);
            return data;
        } catch (error) {
            if (error.response && error.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Failed to fetch Speaker");
            }
        }
    }

}

// eslint-disable-next-line 
export default new Speaker;