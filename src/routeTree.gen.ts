/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PaginationListImport } from './routes/pagination-list'
import { Route as LazyListImport } from './routes/lazy-list'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const PaginationListRoute = PaginationListImport.update({
  id: '/pagination-list',
  path: '/pagination-list',
  getParentRoute: () => rootRoute,
} as any)

const LazyListRoute = LazyListImport.update({
  id: '/lazy-list',
  path: '/lazy-list',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/lazy-list': {
      id: '/lazy-list'
      path: '/lazy-list'
      fullPath: '/lazy-list'
      preLoaderRoute: typeof LazyListImport
      parentRoute: typeof rootRoute
    }
    '/pagination-list': {
      id: '/pagination-list'
      path: '/pagination-list'
      fullPath: '/pagination-list'
      preLoaderRoute: typeof PaginationListImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/lazy-list': typeof LazyListRoute
  '/pagination-list': typeof PaginationListRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/lazy-list': typeof LazyListRoute
  '/pagination-list': typeof PaginationListRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/lazy-list': typeof LazyListRoute
  '/pagination-list': typeof PaginationListRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/lazy-list' | '/pagination-list'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/lazy-list' | '/pagination-list'
  id: '__root__' | '/' | '/about' | '/lazy-list' | '/pagination-list'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  LazyListRoute: typeof LazyListRoute
  PaginationListRoute: typeof PaginationListRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  LazyListRoute: LazyListRoute,
  PaginationListRoute: PaginationListRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/lazy-list",
        "/pagination-list"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/lazy-list": {
      "filePath": "lazy-list.tsx"
    },
    "/pagination-list": {
      "filePath": "pagination-list.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
