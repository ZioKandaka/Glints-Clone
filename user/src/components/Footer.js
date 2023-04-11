import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "../store/action";

function Footer({ job }) {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white mt-10">
        <div>
          <img src="https://glints.com/_next/static/chunks/node_modules/glints-aries/assets/image/glints-logo-white.b9cad75f26a9c8d9cfad.svg" 
            className="w-40"
          />
          <p>
            Glints
            <br />
            Member of Jobstar
          </p>
        </div>
        <div>
          
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
