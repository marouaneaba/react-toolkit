import React from 'react';

export type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Div: React.FC<DivProps> = props => (
  <div {...props}/>
);

export default Div;
