BOOK STORE - LIGHTNING WEB COMPONENT

This is a Salesforce Lightning Web Component (LWC) that fetches and displays books from the Google Books API based on a search keyword.

FEATURES

Fetches books dynamically from Google Books API

Displays book thumbnail, title, published date, and average rating

Uses SLDS (Salesforce Lightning Design System) for styling

Modular and extendable design

TECH STACK

Lightning Web Components (LWC)

Google Books REST API

SLDS (Styling)

HOW IT WORKS

Component: bookListFetch

On component load (connectedCallback), fetches books using a default keyword ("Man")

API response is mapped safely to avoid undefined errors

Data is displayed using lightning-layout and lightning-card
