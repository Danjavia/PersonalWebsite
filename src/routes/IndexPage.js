import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';

function IndexPage() {
  return (
      <div className={styles.normal}>
        <h1>This will be my own site</h1>
        <hr />
        <ul className={styles.list}>
          here i will sto start the notes
        </ul>
      </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
