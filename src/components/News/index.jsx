/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { newsForPage } from '../../helpers/newsForPage';

import moment from 'moment';
export default function NewsTemplate() {
  return (
    <section className="w-[20rem] mx-auto grid grid-cols-1 gap-10 mt-14 mb-10 md:grid-cols-2 md:w-[700px] md:mx-auto xl:w-[1120px] xl:grid-cols-3">
      {newsForPage.map((news) => (
        <div key={news.id} className="flex flex-col items-center gap-4 border-slate-600">
          <h1 className="text-md font-bold text-center">{news.title}</h1>
          <img
            src={news.image}
            alt=""
            className="w-[12rem] h-[12rem] rounded-xl object-cover"
          />
          <p className="text-sm text-center">{news.description}</p>
          <p className="text-sm text-center">{moment(news?.date).format('Do MMM, YYYY')}</p>
        </div>
      ))}
    </section>
  );
}
