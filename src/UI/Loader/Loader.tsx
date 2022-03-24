import React, { CSSProperties } from 'react';
import style from './style.less';

interface LoaderProps {
    isSmall? :boolean;
    inlinestyle?: CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ inlinestyle, isSmall }) => (
  <div style={inlinestyle} className={isSmall ? '' : 'overlay'}>
    <ul className={style['loader']}>
      <li className={style['loader-dot']} />
      <li className={style['loader-dot']} />
      <li className={style['loader-dot']} />
    </ul>
  </div>
);

export default Loader;
