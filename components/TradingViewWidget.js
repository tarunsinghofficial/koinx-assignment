// TradingViewWidget.js
import React, { useEffect, useRef } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "BITSTAMP:BTCUSD",
      "width": "100%",
      "height": "450",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "2",
      "locale": "en",
      "enable_publishing": false,
      "gridColor": "rgba(73, 133, 231, 0.06)",
      "hide_top_toolbar": true,
      "hide_legend": true,
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    });
    container.current.appendChild(script);

    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default TradingViewWidget;
