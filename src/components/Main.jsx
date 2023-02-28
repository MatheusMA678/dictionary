import React from "react";

export default function Main({ phonetics, word, meanings, spanTheme }) {
  return (
    <>
      <main className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold">{word}</h1>
          {phonetics.map((phonetic, index) => (
            <span key={index} className="text-purple-500 text-lg font-medium">
              {phonetic.text}
            </span>
          ))}
        </div>

        {meanings.map((meaning, index) => (
          <section key={index}>
            <div className="flex items-center gap-4">
              <h2 className="font-bold font-cursive text-xl">noun</h2>
              <div className="w-full h-px bg-gray-400" />
            </div>
            <section>
              <h2 className="text-gray-500 font-normal">Meaning</h2>
              <ul className="p-5 pl-10 space-y-1 list-outside list-disc">
                {meaning.definitions.map((def, index) => (
                  <li className="text-purple-600" key={index}>
                    <span className={`${spanTheme} transition`}>
                      {def.definition}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 items-start">
                <h2 className="text-gray-500">Synonyms</h2>
                <div className="flex gap-2 flex-wrap">
                  {meaning.synonyms.map((syn, index) => (
                    <span key={index} className="text-purple-600 font-bold">
                      {syn}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </section>
        ))}
      </main>
    </>
  );
}
