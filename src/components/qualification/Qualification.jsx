import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Work
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">高校</h3>
                <span className="qualification__subtitle">
                  KALIKA MULTIPLE CAMPUS, Nepal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">日本語学校</h3>
                <span className="qualification__subtitle">
                 NIPPON語学院
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ITデザインコース</h3>
                <span className="qualification__subtitle">
                  NIPPONおもてなし専門学校
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">ホテルメネージメント専攻料ホテルマイスタ-コ-ス</h3>
                <span className="qualification__subtitle">
                NIPPONおもてなし専門学校
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graphic Designer</h3>
                <span className="qualification__subtitle">
                Winner Sports & Craft Trading Pvt. Ltd., Nepal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">アルバイト</h3>
                <span className="qualification__subtitle">
                株式会社武蔵野
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">レジ。品出し（アルバイト）</h3>
                <span className="qualification__subtitle">
                セブンイレブン(前橋市野中町店)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">プラスチック成形オペレ-タ-</h3>
                <span className="qualification__subtitle">
                株式会社倉沢製作所
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 現在
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ソフトウェア事業部</h3>
                <span className="qualification__subtitle">
                株式会社コグラグ(品川、東京)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - 現在
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
