<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Eprhsa</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
          let EPISODES={{{episodes}}};


        function EpisodeList(props) {
        const content = props.episodes.map((episode) =>
          <div key={episode.epnum}>
            <h3>title={episode.title}</h3>
            <p>season={episode.season}</p>
          </div>
        );
        return (
          <div>

            <hr />
            {content}
          </div>
        );
      }




                        // const EpisodeList = (props) => {

                        // let items = props.episodes.map((episode) => {

                        // })
                        //   console.log(items);
                        // return <ul>{items}</ul>
                        // }

                        // function ListItem(props){
                        //   return<li>{props.title}</li>

                        // }


                        // function EpisodeList(props) {
                        //   const episodes = props.episodes;
                        //   return (
                        //     <ul>{episodes.map((episode)=>
                        //       <ListItem key={episode.epnum}
                        //       title={episode.title}
                        //       />

                        //       )}
                        //       </ul>
                        //   );
                        //     }




                              class App extends React.Component {
                                constructor(props) {
                                  super(props);
                                  this.state = {
                                    episodes:{{{episodes}}}
                                   };
                                }
                                render() {
                                  return (<div>
                                      <h2>Title</h2>
                                      <EpisodeList show={this.showDetail}episodes = {this.state.episodes}/>
                                    </div>

                                   );
                                }
                              }




                              ReactDOM.render(
                                 <EpisodeList episodes={EPISODES} />,

                                    document.getElementById('root') );
    </script>
    <!--
      Note: this page is a great way to try React but it's not suitable for production.
      It slowly compiles JSX with Babel in the browser and uses a large development build of React.
      Read this section for a production-ready setup with JSX:
      http://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project
      In a larger project, you can use an integrated toolchain that includes JSX instead:
      http://reactjs.org/docs/create-a-new-react-app.html
      You can also use React without JSX, in which case you can remove Babel:
      https://reactjs.org/docs/react-without-jsx.html
    -->
  </body>
</html>
