'use client';
import React from "react";
import Question from "src/app/(public)/(home)/Question";
import { InView } from "react-intersection-observer";

const FAQ = () => (
  <section id="faq" className="divisor relative min-h-fit flex flex-col items-center justify-center text-center gap-7 py-32 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <h2 className="font-bold mt-3">
      Frequently Asked <span className="text-rainbow">Questions</span>
    </h2>

    <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-2">
      {/* TODO: Fix Indents */}
      <Question question="What services does PinkCloud Studio offer?" answer="PinkCloud Studio specializes in a wide range of development services, including web development, software application development, and various other types of development tailored to meet our clients' specific needs." />
      <Question
        question="What sets PinkCloud Studio apart from other freelance development teams?"
        answer="PinkCloud Studio distinguishes itself through a combination of technical excellence, creative solutions, and a client-centric approach. We prioritize understanding our clients' goals to deliver tailored and effective development solutions."
      />
      <Question
        question="How does PinkCloud Studio ensure the security of the developed applications?"
        answer="Security is a top priority at PinkCloud Studio. We follow industry best practices and employ robust security measures to protect the confidentiality, integrity, and availability of our clients' applications. Regular security audits and updates are part of our development process."
      />
      <Question
        question="How does PinkCloud Studio handle post-launch support and maintenance?"
        answer="Our commitment to clients extends beyond project completion. PinkCloud Studio provides post-launch support and maintenance services to address any issues, implement updates, and ensure the continued success of the developed applications."
      />
    </div>
  </section>
);

export default FAQ;

const Question = (props: { question: string; answer: string }) => (
  <div className="relative w-full">
    <InView
      as="div"
      className="absolute top-0 left-0 h-full w-full"
      threshold={0.67}
      initialInView={true}
      fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}
    ></InView>

    <div className="collapse collapse-arrow bg-base-300 bg-opacity-65 rounded-lg in-view">
      <input type="checkbox" />
      <h6 className="flex items-center collapse-title">{props.question}</h6>
      <div className="collapse-content flex items-start">
        <small>{props.answer}</small>
      </div>
    </div>
  </div>
);
