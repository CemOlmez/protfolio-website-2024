import React from 'react';

const SkillCard = ({ imgSrc, label, desc }) => {
  return (
    <div className="flex items-center gap-3 ring-2 ring-inset ring-gray-200/10 rounded-2xl  border border-black/10 p-3 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors group">
      <figure className="bg-gray-700 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-gray-800   transition-colors">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>
      <div>
        <h3 className="text-gray-800  font-semibold">{label}</h3>
        <p className="text-gray-500  text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
