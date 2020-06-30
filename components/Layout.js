import Link from "next/link";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div className="container">
        <nav>
          <Link href="/">
            <a>
              <span className="main-title">Hacker next</span>
            </a>
          </Link>
        </nav>
        {props.children}
      </div>
      <style jsx>{`
            .container{
                max-width:800px;
                margin:0 auto;
                background:#f6f6ef;
            }
            nav{
                background:#f60;
                padding 1em;

            }

            nav > *{
                display:inline-block;
                color:black;
            }

            nav a{
                text-decoration:none;

            }

            nav .main-title{
                font-weight:bold;
            }
          `}</style>

      <style jsx global>
        {`
          body {
            background-color: white;
            font-family: Verdana, Geneva, sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
