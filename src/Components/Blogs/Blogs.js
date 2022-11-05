import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="blogs-div">
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="">
                            <h4 className="fw-bold fw-bolder">Context Api কি ?</h4>
                            <hr />
                            <p>Prop Drilling এড়াতে Context api ব্যবহার করা হয়। 
                                সাধারনত রিয়েক্ট এপে একটা কম্পোনেন্টের কোন ভ্যালুকে অন্য কম্পোনেন্টে ইউজ করতে হলে prop ইউজ করতে হয়। দুরবর্তী কোন child কম্পোনেন্টে এই ভ্যালু ইউজ  করা লাগলে মধ্যবর্তী সকল চাইল্ড কম্পোনেন্টে এই prop বারবার ইউজ করা লাগে, এটাকে prop drilling বলে এবং এটা সময় সাপেক্ষ ও বিরক্তিকর। এই প্রপ ড্রিলিং ঝামেলা এড়াতে, একটা ভ্যালুকে prop ছাড়াই গ্লোবালি ইউজ করতে context api ব্যবহার করা হয়। 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="">
                            <h4 className="fw-bold fw-bolder">Semantic Tag কি ?</h4>
                            <hr />
                            <p>Semantic tag একটা html ডকুমেন্টকে গোছানো ফরমেটে সাজিয়ে তোলে। সিমেন্টিক ট্যাগের মাধ্যমে একটা html document এর কন্টেন্টগুলোকে  আলাদা ভাবে স্পেসিফাই করতে সুবিধা হয়। যেমন , header সিমেন্টিক ট্যাগের মধ্যে একটা html document এর টাইটেল বা বডির মেইন বুলেট পয়েন্টগুলো রাখা হয়। nav ট্যাগ দেখলেই বোঝা যায় এতে পুরো ওয়েবসাইটের নেভিগেশন বার বা মেনু রয়েছে। article ট্যাগের মাধ্যমে বোঝা যায় পেইজের তথ্যগুলো এখানে বর্ননা করা হয়েছে। footer ট্যাগের মাধ্যমে বোঝা যায় এখানে পেইজের শেষ অংশটুকু রয়েছে। প্রোপার সিমেন্টিক ট্যাগ ব্যবহারে সার্চ ইঞ্জিনে আলাদা প্রায়োরিটি পাওয়া যায়। 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;