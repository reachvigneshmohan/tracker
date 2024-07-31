"use client";
import { Manageinvoicedata } from "@/shared/data/pages/invoice/invoicelistdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import * as Invoicedata from "@/shared/data/pages/invoice/invoicelistdata";
const Invoicelist = () => {
  const [manageInvoiceData, setManageInvoiceData] = useState([
    ...Manageinvoicedata,
  ]);
  const handleDelete = (idToRemove: number) => {
    const updatedInvoiceData = manageInvoiceData.filter(
      (item) => item.id !== idToRemove
    );
    setManageInvoiceData(updatedInvoiceData);
  };
  return (
    <Fragment>
      <Seo title={"Driver List"} />
      <Pageheader currentpage="Driver" activepage="Driver" mainpage="Driver" />
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Manage Invoices</div>
              <div className="flex">
                <button
                  type="button"
                  className="ti-btn !py-1 !px-2 !text-[0.75rem] !text-white !font-medium bg-primary"
                >
                  <i className="ri-add-line font-semibold align-middle me-1"></i>{" "}
                  Create Invoice
                </button>
                <div className="hs-dropdown ti-dropdown ms-2">
                  <button
                    aria-label="button"
                    type="button"
                    className="ti-btn ti-btn-secondary ti-btn-sm"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical"></i>
                  </button>
                  <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                    <li>
                      <Link
                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!"
                        scroll={false}
                      >
                        All Invoices
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!"
                        scroll={false}
                      >
                        Paid Invoices
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!"
                        scroll={false}
                      >
                        Pending Invoices
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!"
                        scroll={false}
                      >
                        Overdue Invoices
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-body">
              <div className="table-responsive">
                <table className="table whitespace-nowrap table-bordered min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" className="text-start">
                        Client
                      </th>
                      <th scope="col" className="text-start">
                        Invoice ID
                      </th>
                      <th scope="col" className="text-start">
                        Issued Date
                      </th>
                      <th scope="col" className="text-start">
                        Amount
                      </th>
                      <th scope="col" className="text-start">
                        Status
                      </th>
                      <th scope="col" className="text-start">
                        Due Date
                      </th>
                      <th scope="col" className="text-start">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {manageInvoiceData.map((idx) => (
                      <tr
                        className="invoice-list border border-defaultborder dark:border-defaultborder/10"
                        key={Math.random()}
                      >
                        <td>
                          <div className="flex items-center">
                            <div className="me-2 leading-none">
                              <span className="avatar avatar-sm avatar-rounded">
                                <img src={idx.src} alt="" />
                              </span>
                            </div>
                            <div>
                              <p className="mb-0 font-semibold">{idx.name}</p>
                              <p className="mb-0 text-[.6875rem] text-[#8c9097] dark:text-white/50">
                                {idx.mail}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Link
                            href="#!"
                            scroll={false}
                            className="font-semibold text-primary"
                          >
                            {idx.invoiceid}
                          </Link>
                        </td>
                        <td>{idx.date}</td>
                        <td>{idx.amount}</td>
                        <td>
                          <span
                            className={`badge bg-${idx.color}/10 text-${idx.color}`}
                          >
                            {idx.badge}
                          </span>
                        </td>
                        <td>{idx.due}</td>
                        <td>
                          <button
                            aria-label="button"
                            type="button"
                            className="ti-btn ti-btn-primary ti-btn-icon ti-btn-sm me-2"
                          >
                            <i className="ri-printer-line"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(idx.id)}
                            aria-label="button"
                            type="button"
                            className="ti-btn ti-btn-danger ti-btn-icon ms-1 ti-btn-sm invoice-btn"
                          >
                            <i className="ri-delete-bin-5-line"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="box-footer">
              <nav aria-label="Page navigation">
                <ul className="ti-pagination ltr:float-right rtl:float-left mb-0">
                  <li className="page-item disabled">
                    <Link
                      className="page-link px-3 py-[0.375rem]"
                      href="#!"
                      scroll={false}
                    >
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link active px-3 py-[0.375rem]"
                      href="#!"
                      scroll={false}
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link px-3 py-[0.375rem]"
                      href="#!"
                      scroll={false}
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item hidden sm:block">
                    <Link
                      className="page-link px-3 py-[0.375rem]"
                      href="#!"
                      scroll={false}
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link px-3 py-[0.375rem]"
                      href="#!"
                      scroll={false}
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Invoicelist;
