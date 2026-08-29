import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="04/2022 - 06/2026"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Full-Stack AI Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">CI&T</h4>
            <p>
              • Architected and delivered production-grade AI-powered
              applications using Python, TypeScript, LLMs, RAG, LangGraph,
              OpenAI API, and AWS, reducing manual workflows by 35%.
            </p>
            <p>
              • Designed scalable backend and AI services supporting 500K+ API
              requests per month, with emphasis on reliability, observability,
              and cost optimization.
            </p>
            <p>
              • Built end-to-end web and mobile AI experiences using React,
              Next.js, React Native, and TypeScript, reducing feature delivery
              time by 25%.
            </p>
            <p>
              • Optimized PostgreSQL, Redis, vector search, and AI retrieval
              pipelines, improving p95 API latency by 40% and AI response
              relevance by 30%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01/2022 - 02/2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Engineer / AI Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ingenuity Software
            </h4>
            <p>
              • Designed and developed scalable Python and TypeScript
              microservices supporting SaaS applications with 100K+ monthly
              active users.
            </p>
            <p>
              • Integrated LLMs, RAG, LangChain, OpenAI API, and Amazon Bedrock
              into production systems, reducing manual processing effort by 30%.
            </p>
            <p>
              • Built document-processing, embeddings, and vector-search
              pipelines handling 1M+ indexed records for contextaware AI
              applications.
            </p>
            <p>
              • Optimized PostgreSQL, Redis, and API services, reducing average
              backend response times by 40% and improving overall system
              reliability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2019 - 12/2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">WillowTree</h4>
            <p>
              • Developed full-stack web and mobile applications using
              TypeScript, React, Node.js, React Native, and REST APIs,
              supporting 50K+ monthly users.
            </p>
            <p>
              • Built reusable cross-platform mobile features with React Native,
              reducing duplicated iOS/Android development effort by
              approximately 35%.
            </p>
            <p>
              • Improved application performance through frontend optimization,
              API improvements, database tuning, and caching, reducing key
              page-load times by 30%.
            </p>
            <p>
              • Successfully transitioned to a fully remote engineering workflow
              during the COVID-19 pandemic, maintaining delivery velocity
              through CI/CD, documentation, and asynchronous collaboration.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="04/2017 - 06/2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Exist Software Labs
            </h4>
            <p>
              • Developed enterprise web applications and backend services using
              C#, .NET, JavaScript, SQL, Node.js, and React, supporting 10K+ end
              users.
            </p>
            <p>
              • Designed and implemented REST APIs, database schemas, and
              business logic for scalable enterprise applications.
            </p>
            <p>
              • Optimized SQL queries and backend workflows, improving
              performance of critical application operations by 25%.
            </p>
            <p>
              • Built reusable frontend components and automated testing
              practices, reducing recurring development effort by 20% while
              improving application quality.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
