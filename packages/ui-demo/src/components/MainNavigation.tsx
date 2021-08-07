import React, { useState } from "react";
import { NavigationBar } from "@mscherzer/ui-common-view";

export function MainNavigation() {
  return (
    <NavigationBar>
      <ul>
        <li id="nav_company">
          <h1>Velomedia Pty. Ltd.</h1>
        </li>
        <li>
          <span>
            <a href="/cfkit_acc/member/member/index.cfm">Home</a>
          </span>
        </li>
        <li className="expand">
          <span>Contacts</span>
          <ul>
            <li className="indicator">
              <div></div>
            </li>
            <li>
              <a href="/cfkit_acc/member/customer/">Find Customer</a>
            </li>
            <li>
              <a href="/cfkit_acc/member/customer/create">+ Add Customer</a>
            </li>
          </ul>
        </li>
        <li className="active">
          <span>Account Receivable</span>
          <ul>
            <li className="indicator">
              <div></div>
            </li>
            <li>
              <a href="/cfkit_acc/member/accounting/invoice/">Invoice</a>
            </li>
            <li>
              <a href="/cfkit_acc/member/accounting/connote/">Connotes</a>
            </li>
            <li>
              <a href="/cfkit_acc/member/accounting/transaction/">
                Transactions
              </a>
            </li>
            <li>
              <a href="/cfkit_acc/member/accounting/quote/">Quotes</a>
            </li>
            <li>
              <a href="/cfkit_acc/member/accounting/endofmonth/">
                End of Month
              </a>
            </li>
          </ul>
        </li>
        <li>
          <span>Inventory</span>
          <ul>
            <li className="indicator">
              <div></div>
            </li>
            <li>
              <a href="/cfkit_acc/member/member/catalog/product/">Products</a>
            </li>
            <li>
              <a href="/cfkit_acc/member/member/pricelist/">Pricing</a>
            </li>
          </ul>
        </li>
      </ul>
    </NavigationBar>
  );
}
