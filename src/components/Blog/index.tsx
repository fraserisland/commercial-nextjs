import Header from "@/components/Header";
import Image from "next/image";
const allPosts = [
  {
    title: "Commercial property values near two-year high",
    href: "https://www.commercialrealestate.com.au/news/commercial-value-growth-nears-two-year-high-but-coronavirus-likely-to-see-retail-slump-continue-rics-927291/",
    description:
      "Commercial property values and rent is predicted to climb over the next 12 months. Despite the potential decline of retail assets, survey experts are predicting...",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://www.commercial1gc.com.au/wp-content/uploads/2020/03/2-400x250.jpg",
    readingTime: "6 min",
  },
  {
    title: "Buying wisely with your super",
    href: "https://www.commercialpropertyguide.com.au/blog/investing/buying-wisely-with-your-super-175",
    description:
      "As the number of people with self-managed superannuation funds (SMSFs) continues to grow so does interest in using them to purchase commercial property. If...",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://www.commercial1gc.com.au/wp-content/uploads/2020/03/SMSF-1-400x250.jpg",
    readingTime: "4 min",
  },
  {
    title: "E-commerce as a driver of industrial property investment",
    href: "https://www.smartpropertyinvestment.com.au/research/20604-e-commerce-as-a-driver-of-industrial-property-investment",
    description:
      "Australia’s booming e-commerce marketplace is set to have a flow-on effect for industrial property investors, according to an investment organisation. Follow the link to...",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://www.commercial1gc.com.au/wp-content/uploads/2020/03/3-400x250.jpg",
    readingTime: "11 min",
  },
];

export default function Example({ posts = allPosts }) {
  return (
    <div>
      <Header tag="" title="Latest property news" />
      <div className="relative pb-16  lg:pb-20 ">
        <div className="relative max-w-7xl mx-auto">
          <div className=" mx-auto grid gap-5 lg:grid-cols-3 max-w-none">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden "
              >
                <div className="flex-shrink-0">
                  <div className="h-52 relative">
                  <Image
                    src={post.imageUrl}
                    alt="blog post"
                    layout="fill"
                    className="object-cover"
                  />{" "}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
