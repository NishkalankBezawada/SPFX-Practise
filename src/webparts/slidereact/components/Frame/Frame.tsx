import * as React from 'react';
import { ICardProps } from './IFrameProps';
import styles from '../Slidereact.module.scss';

export default class Card extends React.Component<ICardProps, {}> {

    public render(): React.ReactElement<ICardProps> {
      debugger;
      return (
        <div className={styles.card}>
          <div className={styles.wrapper}>
            <img src={this.props.listItem.imageUrl} className={styles.image} />
            <a href="#" className={styles.url} >
              <h3 className={styles.title}>{this.props.listItem.title}</h3>
            </a>
            <p className={styles.description}>{this.props.listItem.description}</p>
          </div>
        </div>
      );
    }
  }