import * as React from 'react';
import styles from './Slidereact.module.scss';
import { ISlidereactProps } from './ISlidereactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Frame from './Frame/Frame';
import { ISlidereactswiperstate } from './ISlidereactswiperstate';
import { ListItem } from '../SlidereactWebPart';
import * as jquery from 'jquery';
import { SPHttpClient } from '@microsoft/sp-http';

const Swiper: any = require('swiper/dist/js/swiper.min');

export default class Slidereact extends React.Component<ISlidereactProps, ISlidereactswiperstate> {
  private uniqueId: number;
  public lName : string = this.props.listName;
  //lName = this.props.listName;
  constructor(props: ISlidereactProps) {
    super(props);
    this.state = { listItems: [] };
    //this.props.listItems = { ListItem : [] };
    
    this.uniqueId = Math.floor(Math.random() * 10000) + 1;
  }
  public componentDidMount(): void {
    //The below code is to load the mock lists
    /*this.props.listService.getItems().then((result: Array<ListItem>) => {

      // List items returned from the ListMock so we can
      // change the state and display them.
      this.setState({ listItems: result });

      // Since we have list items rendered
      // we can call the swiper and let it
      // handle the swipe effect for the items.
      this.setSwiper();
    });*/

    var reactHandler = this; 
    let resultsArr : Array<ListItem> = [];
    jquery.ajax({ 
        //url: `https://trialnbezawad.sharepoint.com/sites/Practise/_api/web/lists/getbytitle('ImageSources')/items`,
        //url: `${this.props.siteurl}/_api/web/lists(guid'DBD9D51C-9ABA-4EB9-9AF9-673CD2D32C9E')/items`,
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('${this.lName}')/items`,
        type: "GET", 
        headers:{'Accept': 'application/json; odata=verbose;'}, 
        success: function(resultData) { 
          console.log('Results='+resultData);
          debugger;
          resultData.d.results.forEach(function(item){ 
            console.log( item.ID, item.Title, item.Description, item.imageurl.Url );
            resultsArr.push({
              'title':item.Title,
              'description':item.Description,
              'imageUrl':item.imageurl.Url
            });
         });
         console.log(resultsArr);
          reactHandler.setState({ 
            listItems:resultsArr
          }); 
          reactHandler.setSwiper();
        }, 
        error : function(jqXHR, textStatus, errorThrown) {
          alert('Error as-'+textStatus);
          console.log("Error in Console - "+errorThrown); 
        } 
    });
  }
  public render(): React.ReactElement<ISlidereactProps> {
    return (
      <div className={styles.slidereact}>

        <div className={`swiper-container ${styles.container} container-${this.uniqueId}`}>
          <div className='swiper-wrapper'>
            {this.state.listItems.length &&
              this.state.listItems.map((listItem, i) => {
                return <div className={`swiper-slide ${styles.slide}`} key={i}>

                  <Frame listItem={listItem} key={i} />

                </div>;
              })}
          </div>

          {this.props.swiperOptions.enableNavigation &&
            <div className={`swiper-button-next next-${this.uniqueId}`}></div>
          }
          {this.props.swiperOptions.enableNavigation &&
            <div className={`swiper-button-prev prev-${this.uniqueId}`}></div>
          }

          {this.props.swiperOptions.enablePagination !== false &&
            <div className={`swiper-pagination pagination-${this.uniqueId}`}></div>
          }
        </div>
      </div>
    );
  }
  private setSwiper(): void {
    const opts = this.props.swiperOptions;

    const options: any = {
      slidesPerView: parseInt(opts.slidesPerView) || 3,
      slidesPerGroup: parseInt(opts.slidesPerGroup) || 5,
      spaceBetween: parseInt(opts.spaceBetweenSlides) || 5,
      loop: opts.enableLoop || false,
      grabCursor: opts.enableGrabCursor || false,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 3,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 2,
        }
      }
    };

    if (opts.enablePagination !== false) {

      options.pagination = {
        el: `.pagination-${this.uniqueId}`,
        clickable: true,
      };
    }

    if (opts.enableNavigation) {

      options.navigation = {
        nextEl: `.next-${this.uniqueId}`,
        prevEl: `.prev-${this.uniqueId}`,
      };
    }

    if (opts.enableAutoplay) {

      options.autoplay = {
        delay: opts.delayAutoplay,
        disableOnInteraction: opts.disableAutoplayOnInteraction,
      };
    }

    // tslint:disable-next-line:no-unused-expression
    new Swiper(`.container-${this.uniqueId}`, options);
  }
}
