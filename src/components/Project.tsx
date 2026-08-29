import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {/* 1. Full-Stack AI Agent Template */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/FULL-STACK-AI-AGENT-TEMPLATE"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Full-Stack AI Agent Platform</h2>
          </a>

          <p>
            Production-ready AI application template built with FastAPI and
            Next.js. Supports multiple AI agent frameworks, RAG, real-time
            WebSocket streaming, authentication, enterprise integrations,
            background jobs, Docker, and Kubernetes.
          </p>
        </div>

        {/* 2. A-RAG Next.js */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/nextjs-docs-rag"
            target="_blank"
            rel="noreferrer"
          >
            <h2>A-RAG Next.js</h2>
          </a>

          <p>
            Agentic RAG system designed to answer questions using the official
            Next.js documentation. Implements hybrid BM25 and vector retrieval,
            reranking, LangGraph orchestration, evidence memory, semantic
            caching, source-grounded citations, evaluation, and benchmarking.
          </p>
        </div>

        {/* 3. React Native AI */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/rn-mlc"
            target="_blank"
            rel="noreferrer"
          >
            <h2>React Native AI - Local LLM</h2>
          </a>

          <p>
            React Native library for running LLMs locally on mobile devices
            using the MLC LLM Engine, with compatibility for the Vercel AI SDK.
            Supports native iOS and Android integration and local model
            execution.
          </p>
        </div>

        {/* 4. Expense Tracker */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/RNT"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Expense Tracker</h2>
          </a>

          <p>
            React Native and Expo expense management application with JWT
            authentication, expense CRUD, dynamic categories, charts, date
            filtering, dark/light mode, secure token storage, offline caching,
            connectivity detection, and a pending change queue.
          </p>
        </div>

        {/* 5. ReactAndGo */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/ReactAndGo"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ReactAndGo</h2>
          </a>

          <p>
            Full-stack React and Go application for monitoring local gas prices.
            Includes JWT authentication, PostgreSQL, GORM, MQTT messaging,
            scheduled data imports, price analytics, notifications, interactive
            OpenLayers maps, and data visualization.
          </p>
        </div>

        {/* 6. Rental Application */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/rental-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Rental Application</h2>
          </a>

          <p>
            Cross-platform React Native and TypeScript mobile application for
            renting furniture. Features authentication, product discovery,
            search, trending products, shopping cart, checkout, order history,
            JWT API security, and session management.
          </p>
        </div>

        {/* 7. RAG */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/RAG"
            target="_blank"
            rel="noreferrer"
          >
            <h2>RAG AI Application</h2>
          </a>

          <p>
            Retrieval-Augmented Generation project exploring document retrieval,
            embeddings, vector search, LLM responses, and AI-powered question
            answering.
          </p>
        </div>

        {/* 8. React Native SQLite */}
        <div className="project">
          <a
            href="https://github.com/ralph-santiago-2992/react-native-sqlite-demo"
            target="_blank"
            rel="noreferrer"
          >
            <h2>React Native SQLite</h2>
          </a>

          <p>
            React Native project exploring local SQLite database integration for
            mobile applications, demonstrating persistent on-device data and
            native mobile storage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
