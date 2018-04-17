import React, { Component } from 'react';


class Content extends Component {
    render() {
        return (
            <div style={styles.content}
                 id="content">
            
                <h1>CryptoKitties Battle Arena</h1>
                <p>Lorem ipsum dolor sit amet, no soluta expetendis pri, magna omnes labitur nam at. Esse aeque in pro, integre erroribus ne est. Evertitur quaerendum ius id. Et nec option oportere, iriure gubergren id eos. Stet dicta nam in, sonet viris id vix. Amet iudico forensibus at quo, fuisset alienum pertinacia mei et. Zril accusamus tincidunt in quo, posse nostrud utroque vel ne.

Ea altera bonorum sit, vel ne prompta deserunt maluisset. Mel quidam salutandi concludaturque ne, elit ferri et sea, usu ne tollit aliquam feugait. Saperet dolores constituam vim no, brute animal definitiones qui ex. An mea homero ancillae pertinax, usu pertinax facilisis ullamcorper ei, at velit mentitum est. Pro eu verear nonumes reprimique, eu vel decore accusata, congue quodsi nonumes cu ius.

Has utroque similique dissentias ei, duo eros semper volutpat id. Oratio laudem insolens ea sit, mollis singulis ei has, soleat altera alienum nam ei. Te nec mazim animal. Munere inciderint et eum, vide virtute iudicabit no ius. Id choro oporteat tractatos sit, legendos salutatus vel ei.

Ut adhuc laudem repudiare mei, et cum munere aliquip menandri, eam tota quaestio platonem an. Ad sumo tacimates vim. Everti menandri ea mea, novum iusto possim et pro, oportere argumentum te ius. Erant viris nec te, cu quem torquatos definitionem usu. Vero summo nostrum in duo, an per tation audire.

Ipsum noster quo te, et aperiam ancillae usu. Minim invidunt reformidans ut duo. Id habeo mutat legendos vis, nominavi epicurei philosophia no sea. Ad mea tantas maiorum, omnesque suscipit recteque ut nec. Ius no mutat munere. His omnesque referrentur ex, ad his errem nominati forensibus. Ius magna porro et, suas consetetur dissentias ad usu.</p> 
            </div>
        );
    }
}

export default Content;

let styles = {
    content: {
        position: 'absolute',
        borderRadius: 10,
        paddingLeft: 50,
        paddingRight: 50,
        color: '#000',
        
        top: '7.5em',
        fontSize: '1.4em',
        alignSelf: 'center',
        height: '60vh',
        width: '50vw',
        zIndex: 888,
        
        overflow: 'scroll',
      }
}