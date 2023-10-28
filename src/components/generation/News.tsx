import dayjs from 'dayjs';
import Link from 'next/link';

interface IProps {
  generationName: String;
}

export default async function News({ generationName }: IProps) {
  const newsList = await fetch(
    `https://openapi.naver.com/v1/search/news.json?query=나는솔로${generationName}&sort=date`,
    {
      next: { revalidate: 60 * 60 },
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-Naver-Client-Id':
          process.env.NEXT_PUBLIC_NAVER_DEVELOPERS_CLIENT_ID || '',
        'X-Naver-Client-Secret':
          process.env.NEXT_PUBLIC_NAVER_DEVELOPERS_CLIENT_SECRET || '',
      },
    },
  ).then((res) => res.json());

  return (
    <div className="mt-8">
      <div className="flex items-center">
        <div className="text-xl font-bold">News</div>
        <div className="pl-4 text-xs text-gray-400">
          {dayjs(newsList.lastBuildDate).format('MM월 DD일 HH시 mm분')} Updated
        </div>
      </div>
      <ul className="my-2 p-2 border-solid border-2 border-gray-200 rounded-lg">
        {newsList?.items.map((news: any, index: any) => (
          <Link key={index} href={news.link} target="_blank">
            <li className="px-2 py-2 hover:bg-slate-200 rounded-lg">
              <span
                className="text-lg w-[90%]"
                dangerouslySetInnerHTML={{
                  __html: news.title,
                }}
              />
              <span className="ml-2 text-xs text-gray-300 text-right">
                {dayjs(news.pubDate).format('MM/DD HH:mm')}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
