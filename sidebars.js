/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // The docs entrance is in the docusaurus.config.js

    // By default, Docusaurus generates a sidebar from the docs folder structure
    // docs: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    docs: [
        {
            type: "category",
            label: "Getting started",
            items: [
                'getting-started/introduction',
                'getting-started/quickstart',
            ]
        },
        {
            type: 'category',
            label: 'Concepts',
            items: [
                'Concepts/input-format',
                'Concepts/data-format',
                'Concepts/schema',
                'Concepts/action-time',
                'Concepts/filters',
                'Concepts/compression',
                'Concepts/storage-service'
            ]
        },
        {
            type: 'category',
            label: 'Querying',
            items: [
                'querying/cohort-query',
            ]
        },
        {
            type: "category",
            label: "Tutorials",
            items: [
                'tutorials/tutorial-input-format'
            ]
        },
        'application/application',
        {
            type: 'category',
            label: 'Publications',
            items: [
                'publication/paper',
            ]
        },
        // {
        //     type: "category",
        //     label: "Markdown Features",
        //     items: [
        //         'markdown-features/mdx-template',
        //         // "markdown-features/react",
        //         "markdown-features/tabs",
        //         "markdown-features/code-blocks",
        //         "markdown-features/admonitions",
        //         "markdown-features/headings",
        //         "markdown-features/inline-toc",
        //         "markdown-features/assets",
        //         "markdown-features/plugins",
        //         "markdown-features/math-equations",
        //         "markdown-features/head-metadata",
        //     ]
        // },
    ]
};

module.exports = sidebars;
