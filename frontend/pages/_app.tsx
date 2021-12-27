import React from "react";
import {AppProps} from "next/app";

import {Refine} from "@pankod/refine";
import routerProvider from "@pankod/refine-nextjs-router";

import "@pankod/refine/dist/styles.min.css";
import dataProvider from "@pankod/refine-simple-rest";
const API_URL = "http://localhost:8000";
//const API_URL = "https://api.fake-rest.refine.dev";

import {PostList, PostCreate, PostEdit, PostShow} from "@components/posts";
import {CourseCreate, CourseEdit, CourseList, CourseShow} from "@components/courses";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
                {
                    name: "course",
                    list: CourseList,
                    create: CourseCreate,
                    edit: CourseEdit,
                    show: CourseShow,
                },
            ]}
        >
            <Component {...pageProps} />
        </Refine>
    );
}

export default MyApp;
