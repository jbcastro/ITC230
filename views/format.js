
        


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
   