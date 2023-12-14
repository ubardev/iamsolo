import React from 'react';

interface IProps {
  memberTags: String[];
}

export default function Tags({ memberTags }: IProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {memberTags.map((tag, index) =>
        tag.indexOf('(?)') !== -1 ? (
          <div
            key={index}
            className="pl-2 pr-2 bg-slate-300 text-slate-400 rounded-2xl"
          >
            {tag}
          </div>
        ) : (
          <div
            key={index}
            className="pl-2 pr-2 bg-pink-600 text-white rounded-2xl"
          >
            {tag}
          </div>
        ),
      )}
    </div>
  );
}
