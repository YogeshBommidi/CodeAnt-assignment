import React, { Component } from "react";
import "./RepoPage.css";

export default class extends Component {
  render() {
    return (
      <div className="Repo-Container">
        <div className="repo-left">
          <div className="repo-company-container">
            <img src="/logo1.png" alt="" />
            <span>CodeAnt AI</span>
          </div>
          <div className="repo-menu-dropdown">
            <span>UtkarshDhairyaPa...</span>
            <img src="/chevron-down.png" alt="" />
          </div>
          <button className="repo-button">
              <img src="/home.png" alt="" />
              <span>Repositories</span>
            </button>
          <div className="repo-menu">
            <div className="repo-menu-items">
              <img src="/code.png" alt="" />
              <span>AI Code Review</span>
            </div>
            <div className="repo-menu-items">
              <img src="/cloud.png" alt="" />
              <span>Cloud Security</span>
            </div>
            <div className="repo-menu-items">
              <img src="/book.png" alt="" />
              <span>How to Use</span>
            </div>
            <div className="repo-menu-items">
              <img src="/gear.png" alt="" />
              <span>Settings</span>
            </div>
            <div className="repo-menu-items">
              <img src="/phone.png" alt="" />
              <span>Support</span>
            </div>
            <div className="repo-menu-items">
              <img src="/sign-out.png" alt="" />
              <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="repo-right">
          <div className="repo-heading">
            <div>
              <span>Repositories</span>
              <span>33 total repositories</span>
            </div>
            <div>
              <img src="/refresh.png" alt="" />
              <span>Refresh All</span>
            </div>
            <div>
              <img src="/plus.png" alt="" />
              <span>Add Repository</span>
            </div>
          </div>
          <div className="search">
            <img src="/search.png" alt="" />
            <span>Search Repositories</span>
          </div>
          <div className="repobox">
            <div>
              <span>design-system</span>
              <span>public</span>
            </div>
            <div>
              <div>
                <span>React</span>
                <img src="/Ellipse-1.png" alt="" />
              </div>
              <div>
                <img src="/database.png" alt="" />
                <span>7320 KB</span>
              </div>
              <span>Updated 1 day ago</span>
            </div>
          </div>
          <div className="repobox">
            <div>
              <span>design-system</span>
              <span>public</span>
            </div>
            <div>
              <div>
                <span>React</span>
                <img src="/Ellipse-1.png" alt="" />
              </div>
              <div>
                <img src="/database.png" alt="" />
                <span>7320 KB</span>
              </div>
              <span>Updated 1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
