import Image from 'next/image';

export default function () {
    const codeSnippet = `
    const Kimi = {
       name: Kayoung,
       age: 26,
       field: FrontEnd,
       favorite: "🧘🏻‍♀️", "⛰️", "🍵", "🎹", "🎬"   
    }
  `;
    return (
        <div className="max-w-screen-md mx-auto">
            Hello, let me introduce myself.
            <pre className="bg-[#d8d8d888] dark:bg-slate-800 text-base text-[#7eb4d0] my-10">
                <code>{codeSnippet}</code>
            </pre>
            <div className=" flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start">
                <div className="hover12">
                    <figure>
                        <Image
                            width={300}
                            height={300}
                            src="/img/jeju.jpeg"
                            alt="소개"
                            className="rounded"
                            quality={100}
                        />
                    </figure>
                </div>
                <span className="break-keep leading-8">
                    <br />
                    <b>협업을 좋아하는 개발자입니다.</b>
                    <br />
                    저에게 개발은 단순히 코드를 치는 것이 아닌,
                    <br />
                    “함께 성장하고 발전하는 것”입니다.
                    <br />
                    긍정적인 분위기와 문화 속에서 조직 전반의 성장에 기여하고,
                    <br />
                    팀 전체의 역량을 향상시키는 개발자를 목표로 합니다.
                    <br /> <br />
                </span>
            </div>
        </div>
    );
}
