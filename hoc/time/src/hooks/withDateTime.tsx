import React from 'react';

const withDateTime = (Component: React.FC<{date: string}>) => {
  return class extends React.Component<{date: string}> {
    getTime() {
      const min = Math.floor(
        (+Date.now() - +new Date(this.props.date)) / 1000 / 60
      );

      if (min < 60) return min + ' минут назад';
      if (min >= 60 && min < 60 * 24) return Math.floor(min / 60) + ' часа назад';  
      if (min / 60 / 24 < 30) return Math.floor(min / 60 / 24) + ' дней назад';
      
      return new Date(this.props.date).toLocaleDateString();
    }

    render() {
      return <Component date={this.getTime()} />
    }
  }
}

export default withDateTime;