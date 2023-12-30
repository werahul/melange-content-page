// TagComponent.js
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

const TagComponent = () => {
  const [selectedTag, setSelectedTag] = useState("Videography");
  const [selectedSubtag, setSelectedSubtag] = useState("All");
  const [visibleVideos, setVisibleVideos] = useState(6);

  const subtags = {
    Videography: [
      "All",
      "Product Videos",
      "Brand Videos",
      "Digital Ads",
      "Animation & Motion Graphics",
      "Social Media Videos",
      "Explainer Videos",
      "Corporate Films",
      "Live or Virtual Events Filming",
      "Influencer Marketing Videos",
    ],
    Photography: [
      "All",
      "Industrial Photography",
      "Leadership Portraits",
      "Product Photography",
      "Food Photography",
      "E-Commerce Photography",
      "Fashion Photography",
    ],
    Audio: [
      "All",
      "Music Production",
      "Composition",
      "Song Writing",
      "Jingle Production",
      "Voice Over",
      "Mixing Master",
      "Background Score",
    ],
  };

  const contentBySubtag = {
    Videography: {
      All: [
        {
          title: "Click Studio - Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/-7DpxE8sAW4?si=sYpomtloztsURuMs",
        },
        {
          title: "Addverb - Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/1ht3mpNXN88?si=WqGgSnNuWUehbBFk",
        },
        {
          title: "Successive Tech- Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/aARCoqbBVbk?si=InSYDoGvmdcS_q-3",
        },
        {
          title: "Mélange Digital - Entertainment & Media",
          videoUrl:
            "https://www.youtube.com/embed/xmoZepORbQM?si=O9plaJqRLE_QmZo-",
        },
        {
          title: "Xebia Academia - Education",
          videoUrl:
            "https://www.youtube.com/embed/eapyKX-_erM?si=li-nK_Hy2MsKhWjc",
        },
        {
          title: "Puma - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/gyWE1W1WcMo?si=wguJOPgEZqD0PqA8",
        },
        {
          title: "Puma - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/SgvDVYv3JUU?si=_IW6Vs_5AsosEZGU",
        },
        {
          title: "Skechers- Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/--mFE3ZbFXM?si=_d38a5HDHxc6uLHJ",
        },
        {
          title: "Skechers- Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/QBeEA4_Fsak?si=_Bic_ULDcNtjiyze",
        },
        {
          title: "Vivo- Digital Commercial (Influencer Marketing)",
          videoUrl:
            "https://www.youtube.com/embed/vMw3USNmiAw?si=V4Vl1kNw9TrOjiO6",
        },
        {
          title: "Swarvoski - Jewellery",
          videoUrl:
            "https://www.youtube.com/embed/JLBsWSkugho?si=_xGsMoPxLvTcocWW",
        },
        {
          title: "Pepperfry - Retail & E-commerce",
          videoUrl:
            "https://www.youtube.com/embed/ie0v1g3-jow?si=UE5l-I_BOXWDcFv6",
        },
        {
          title: "Pepperfry - Retail & E-commerce",
          videoUrl:
            "https://www.youtube.com/embed/X_s9Ap--QCc?si=J7wjeofdOXAJjNFp",
        },
        {
          title: "Taj - Hospitality & Travel",
          videoUrl:
            "https://www.youtube.com/embed/PhMTAIYgL9s?si=V5pjJ-SSNvfUrGb1",
        },
        {
          title: "IIFL - Finance",
          videoUrl: "https://youtube.com/embed/b294qldYrVo?si=Kr_75tp0BSVLTz2U",
        },
        {
          title: "IIFL - Finance",
          videoUrl: "https://youtube.com/embed/Y0IKGtu7m4A?si=ECAUpKl75fRBldqA",
        },
        {
          title: "Yumme - FMCG",
          videoUrl: "https://youtube.com/embed/Y4ucclmoyME?si=7gxNcHIyoQEKTT_V",
        },
        {
          title: "Kalon - FMCG",
          videoUrl: "https://youtube.com/embed/n7En3o1tZyg?si=Bhw2_mgWcU-j7_rN",
        },
        {
          title: "Wolfman - Beauty & Fashion",
          videoUrl: "https://youtube.com/embed/RqwYlnmv4cM?si=kxYDCq0ZNHWiYsSi",
        },
        {
          title: "Arq - Food & Confectionery",
          videoUrl: "https://youtube.com/embed/EcUeX4p3FeQ?si=BMwB8gGB9o2wcvNV",
        },
        {
          title: "Hills & Dales - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/bEU8rp7yO-Q?si=fiNuwpFzFUw-bdoC",
        },
        {
          title: "Gauhar Khan - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/-GqnW0de-XQ?si=9Bxn-LZq0ciEZ4N4",
        },
        {
          title: "Diajio - FMCG",
          videoUrl: "https://youtube.com/embed/xBwinKmlqGg?si=Se6N0hRzYn0UHUly",
        },
        {
          title: "Sony - Consumer Electronics",
          videoUrl:
            "https://www.youtube.com/embed/ZOUouAJSrNk?si=mSnb60w268FmAs4t",
        },
        {
          title: "Sony - Consumer Electronics",
          videoUrl:
            "https://www.youtube.com/embed/cPSYrwgXKOw?si=OeuaLxFuYAUIJSg0",
        },
        {
          title: "Arq - Food & Confectionery",
          videoUrl: "https://youtube.com/embed/O-IHFdpwsgs?si=DRnC4IFPqvULH_Bc",
        },
        {
          title: "HCL - Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/jtktd1FCZGI?si=_1F1wtj6-3SrrKZ4",
        },
      ],
      "Product Videos": [
        {
          title: "Xebia Academia - Education",
          videoUrl:
            "https://www.youtube.com/embed/eapyKX-_erM?si=li-nK_Hy2MsKhWjc",
        },
      ],
      "Brand Videos": [
        {
          title: "Click Studio - Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/-7DpxE8sAW4?si=sYpomtloztsURuMs",
        },
        {
          title: "Addverb - Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/1ht3mpNXN88?si=WqGgSnNuWUehbBFk",
        },
        {
          title: "Successive Tech- Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/aARCoqbBVbk?si=InSYDoGvmdcS_q-3",
        },
        {
          title: "Mélange Digital - Entertainment & Media",
          videoUrl:
            "https://www.youtube.com/embed/xmoZepORbQM?si=O9plaJqRLE_QmZo-",
        },
      ],
      "Digital Ads": [
        {
          title: "Puma - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/gyWE1W1WcMo?si=wguJOPgEZqD0PqA8",
        },
        {
          title: "Puma - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/SgvDVYv3JUU?si=_IW6Vs_5AsosEZGU",
        },
        {
          title: "Skechers- Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/--mFE3ZbFXM?si=_d38a5HDHxc6uLHJ",
        },
        {
          title: "Skechers- Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/QBeEA4_Fsak?si=_Bic_ULDcNtjiyze",
        },
        {
          title: "Vivo- Digital Commercial (Influencer Marketing)",
          videoUrl:
            "https://www.youtube.com/embed/vMw3USNmiAw?si=V4Vl1kNw9TrOjiO6",
        },
        {
          title: "Swarvoski - Jewellery",
          videoUrl:
            "https://www.youtube.com/embed/JLBsWSkugho?si=_xGsMoPxLvTcocWW",
        },
        {
          title: "Pepperfry - Retail & E-commerce",
          videoUrl:
            "https://www.youtube.com/embed/ie0v1g3-jow?si=UE5l-I_BOXWDcFv6",
        },
        {
          title: "Pepperfry - Retail & E-commerce",
          videoUrl:
            "https://www.youtube.com/embed/X_s9Ap--QCc?si=J7wjeofdOXAJjNFp",
        },
      ],
      "Animation & Motion Graphics": [
        {
          title: "Taj - Hospitality & Travel",
          videoUrl:
            "https://www.youtube.com/embed/PhMTAIYgL9s?si=V5pjJ-SSNvfUrGb1",
        },
        {
          title: "IIFL - Finance",
          videoUrl: "https://youtube.com/embed/b294qldYrVo?si=Kr_75tp0BSVLTz2U",
        },
        {
          title: "IIFL - Finance",
          videoUrl: "https://youtube.com/embed/Y0IKGtu7m4A?si=ECAUpKl75fRBldqA",
        },
      ],
      "Social Media Videos": [
        {
          title: "Yumme - FMCG",
          videoUrl: "https://youtube.com/embed/Y4ucclmoyME?si=7gxNcHIyoQEKTT_V",
        },
        {
          title: "Kalon - FMCG",
          videoUrl: "https://youtube.com/embed/n7En3o1tZyg?si=Bhw2_mgWcU-j7_rN",
        },
        {
          title: "Wolfman - Beauty & Fashion",
          videoUrl: "https://youtube.com/embed/RqwYlnmv4cM?si=kxYDCq0ZNHWiYsSi",
        },
        {
          title: "Arq - Food & Confectionery",
          videoUrl: "https://youtube.com/embed/EcUeX4p3FeQ?si=BMwB8gGB9o2wcvNV",
        },
      ],
      "Explainer Videos": [
        {
          title: "Sony - Consumer Electronics",
          videoUrl:
            "https://www.youtube.com/embed/ZOUouAJSrNk?si=mSnb60w268FmAs4t",
        },
        {
          title: "Sony - Consumer Electronics",
          videoUrl:
            "https://www.youtube.com/embed/cPSYrwgXKOw?si=OeuaLxFuYAUIJSg0",
        },
        {
          title: "Arq - Food & Confectionery",
          videoUrl: "https://youtube.com/embed/O-IHFdpwsgs?si=DRnC4IFPqvULH_Bc",
        },
        {
          title: "HCL - Software & Technology",
          videoUrl:
            "https://www.youtube.com/embed/jtktd1FCZGI?si=_1F1wtj6-3SrrKZ4",
        },
      ],
      "Corporate Films": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Live or Virtual Events Filming": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Influencer Marketing Videos": [
        {
          title: "Hills & Dales - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/bEU8rp7yO-Q?si=fiNuwpFzFUw-bdoC",
        },
        {
          title: "Gauhar Khan - Beauty & Fashion",
          videoUrl:
            "https://www.youtube.com/embed/-GqnW0de-XQ?si=9Bxn-LZq0ciEZ4N4",
        },
        {
          title: "Diajio - FMCG",
          videoUrl: "https://youtube.com/embed/xBwinKmlqGg?si=Se6N0hRzYn0UHUly",
        },
      ],
    },
    Photography: {
      All: [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Industrial Photography": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Leadership Portraits": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Product Photography": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Food Photography": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "E-Commerce Photography": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Fashion Photography": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      // ... add content for other subtags in Photography
    },
    Audio: {
      All: [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Music Production": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      Composition: [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Song Writing": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Jingle Production": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Voice Over": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Mixing Master": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      "Background Score": [
        {
          title: "Content specific to Brand Videos 1.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id1",
        },
        {
          title: "Content specific to Brand Videos 2.",
          videoUrl: "https://www.youtube.com/embed/your_brand_videos_video_id2",
        },
      ],
      // ... add content for other subtags in Audio
    },
  };

  const [props, set] = useSpring(() => ({
    left: 0,
  }));

  const bind = useGesture({
    onDrag: ({ delta: [x] }) => {
      const index = tabs.indexOf(selectedTag);
      const nextIndex =
        x > 0 ? Math.min(index + 1, tabs.length - 1) : Math.max(index - 1, 0);
      setSelectedTag(tabs[nextIndex]);
    },
    onDragEnd: () => {
      // Implement any additional logic on drag end if needed
    },
  });

  const loadMore = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 6);
  };

  const viewLess = () => {
    setVisibleVideos((prevVisibleVideos) => Math.max(prevVisibleVideos - 6, 6));
  };

  return (
    <div className="p-4 mt-10 lg:mt-20">
      <div className="text-center font-nunito mb-10">
        <span className="text-black text-3xl lg:text-5xl font-bold font-nunito leading-[56px]">
          Our{" "}
        </span>
        <span className="multiverse-text text-3xl lg:text-5xl font-bold font-nunito leading-[56px]">
          PortFolio
        </span>
      </div>
      <div className="flex items-center font-nunito text-[16px] lg:text-[18px]  font-semibold justify-center space-x-3 lg:space-x-10 ">
        {Object.keys(subtags).map((tag) => (
          <button
            key={tag}
            className={`px-4 rounded-full py-2 ${
              selectedTag === tag
                ? "border border-blue-400  multiverse-text"
                : "border border-gray-200 text-gray-500"
            }`}
            onClick={() => {
              setSelectedTag(tag);
              setSelectedSubtag("All");
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="my-10">
        {/* <h2 className="text-xl font-bold ">{selectedTag} Subtags:</h2> */}
        <ul className=" flex flex-col  lg:space-y-5 font-nunito text-[12px] lg:text-[16px] font-medium justify-center space-x-0 lg:space-x-20  max-container  items-center lg:pl-4 mt-2">
          <div className="hidden lg:flex space-x-4 text-center lg:text-left lg:space-x-10">
            {subtags[selectedTag].slice(0, 5).map((subtag) => (
              <div>
                <div
                  key={subtag}
                  className={`cursor-pointer flex ${
                    selectedSubtag === subtag ? " multiverse-text3  " : ""
                  }`}
                  onClick={() => setSelectedSubtag(subtag)}
                >
                  {subtag}
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex space-x-4 text-center lg:text-left lg:space-x-10">
            {subtags[selectedTag].slice(5, 11).map((subtag) => (
              <div
                key={subtag}
                className={`cursor-pointer flex list-none ${
                  selectedSubtag === subtag ? "multiverse-text3 underline" : ""
                }`}
                onClick={() => setSelectedSubtag(subtag)}
              >
                {subtag}
              </div>
            ))}
          </div>
          <div className="flex items-center lg:hidden w-[100%] overflow-x-scroll space-x-4 text-center whitespace-nowrap lg:text-left ">
            {subtags[selectedTag].map((subtag) => (
              <div
                key={subtag}
                className={`cursor-pointer font-semibold text-[16px] flex list-none ${
                  selectedSubtag === subtag
                    ? "multiverse-text border-2  border-[#d940ff] py-1 px-2 rounded-[20px]"
                    : ""
                }`}
                onClick={() => setSelectedSubtag(subtag)}
              >
                {subtag}
              </div>
            ))}
          </div>
        </ul>
      </div>

      <div className="mb-5 max-container grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 lg:px-[100px]">
        {contentBySubtag[selectedTag][selectedSubtag]
          .slice(0, visibleVideos)
          .map((video, index) => (
            <div key={index} className="mb-4 w-[350px]">
              <iframe
                width=""
                height=""
                src={video.videoUrl}
                title="YouTube Video"
                // frameBorder="0"
                allowFullScreen
                className="rounded-[20px] h-[350px] lg:w-[350px] w-full"
              ></iframe>
              <p className="mt-2 text-center multiverse-text text-[18px] font-nunito font-bold">
                {video.title}
              </p>
            </div>
          ))}
      </div>
      <div className="flex mb-20 justify-center font-nunito items-center w-full">
        <div>
          {visibleVideos <
            contentBySubtag[selectedTag][selectedSubtag].length && (
            <button
              className="rounded-full border border-[#dd94ff] font-semibold bg-transparent multiverse-text4 hover:border-black transition-all px-4 py-2 mt-4"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
        <div className="flex  font-nunito items-end">
          {visibleVideos > 6 && (
            <button
              className="rounded-full border border-[#dd94ff] font-semibold bg-transparent multiverse-text4 hover:border-black transition-all px-4 py-2 mt-4  h-10 ml-2"
              onClick={viewLess}
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagComponent;
