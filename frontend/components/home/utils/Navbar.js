/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/thumb/3/3f/SMA_Rogojampi.png/1200px-SMA_Rogojampi.png"
              alt="Logo"
              width={60}
              height={70}
              className="d-inline-block align-text-top"
            />
            <span className="navbar-brand h1 text-align-center mt-2"> SMA Negeri 1 Rogojampi</span>
          </a>
        </div>
      </nav>
    </>
  );
}
