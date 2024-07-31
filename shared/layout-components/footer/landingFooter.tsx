import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";

const LandingFooter = () => {
  return (
    <Fragment>
      <section className="section landing-footer  text-white text-[0.813rem] opacity-[0.87]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-4 col-span-12">
              <div className="px-6">
                <p className="font-semibold mb-4">
                  <Link aria-label="anchor" href="/">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/brand-logos/desktop-dark.png"
                      alt=""
                    />
                  </Link>
                </p>
                <p className="mb-2 opacity-[0.6] font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit et magnam, fuga est mollitia eius, quo illum
                  illo inventore optio aut quas omnis rem. Dolores accusantium
                  aspernatur minus ea incidunt.
                </p>
                <p className="mb-0 opacity-[0.6] font-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem ea esse ad
                </p>
              </div>
            </div>
            <div className="xl:col-span-2 col-span-12">
              <div className="px-6">
                <h6 className="font-semibold text-[1rem] mb-4">PAGES</h6>
                <ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Email
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Timeline
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-2 col-span-12">
              <div className="px-6">
                <h6 className="font-semibold text-[1rem] mb-2">INFO</h6>
                <ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Contact US
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-white">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="px-6">
                <h6 className="font-semibold text-[1rem] mb-2">CONTACT</h6>
                <ul className="list-unstyled font-normal landing-footer-list">
                  <li>
                    <Link
                      href="#!"
                      scroll={false}
                      className="text-white opacity-[0.6]"
                    >
                      <i className="ri-home-4-line me-1 align-middle"></i> New
                      York, NY 10012, US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#!"
                      scroll={false}
                      className="text-white opacity-[0.6]"
                    >
                      <i className="ri-mail-line me-1 align-middle"></i>{" "}
                      info@fmail.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#!"
                      scroll={false}
                      className="text-white opacity-[0.6]"
                    >
                      <i className="ri-phone-line me-1 align-middle"></i>{" "}
                      +(555)-1920 1831
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#!"
                      scroll={false}
                      className="text-white opacity-[0.6]"
                    >
                      <i className="ri-printer-line me-1 align-middle"></i>{" "}
                      +(123) 1293 123
                    </Link>
                  </li>
                  <li className="mt-4 !mb-0">
                    <p className="mb-2 font-semibold opacity-[0.8] text-[1rem]">
                      FOLLOW US ON :
                    </p>
                    <div className="mb-0">
                      <div className="btn-list">
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-sm !mb-0 ti-btn-primary me-[0.365rem]"
                        >
                          <i className="ri-facebook-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-sm !mb-0 ti-btn-secondary me-[0.365rem]"
                        >
                          <i className="ri-twitter-x-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-sm !mb-0 ti-btn-warning me-[0.365rem]"
                        >
                          <i className="ri-instagram-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-sm !mb-0 ti-btn-success me-[0.365rem]"
                        >
                          <i className="ri-github-line font-bold"></i>
                        </button>
                        <button
                          aria-label="button"
                          type="button"
                          className="ti-btn ti-btn-sm !mb-0 ti-btn-danger"
                        >
                          <i className="ri-youtube-line font-bold"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center landing-main-footer py-4 opacity-[0.87]">
        <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem]">
          {" "}
          Copyright © 2024<span id="year"></span>{" "}
          <Link
            href="#!"
            scroll={false}
            className="!text-primary font-semibold"
          >
            <u>ynex</u>
          </Link>
          . Designed with <span className="fa fa-heart text-danger"></span> by{" "}
          <Link
            href="#!"
            scroll={false}
            className="!text-primary font-semibold"
          >
            <u>Spruko</u>
          </Link>{" "}
          All rights reserved
        </span>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(LandingFooter);
