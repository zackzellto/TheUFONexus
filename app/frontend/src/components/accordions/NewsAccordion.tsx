import React, { useState } from "react";

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  sourceName: string;
}

interface NewsAccordionProps extends NewsArticle {
  isVisible: boolean;
}

const NewsAccordion: React.FC<NewsAccordionProps> = ({
  title,
  description,
  urlToImage,
  sourceName,
  url,
  isVisible,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={urlToImage}
            alt="Article image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide" : "Read More"}
          </p>
          {isOpen && (
            <div className="mt-2">
              <p className="text-gray-500">{description}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                {sourceName}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAccordion;
