import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.ellipseParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupParent}>
          <div className={styles.amountParent}>
            <div className={styles.amount}>Amount:</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.enterAmountTo}>Enter amount to send</div>
            </div>
          </div>
          <div className={styles.receiversAccountParent}>
            <div className={styles.receiversAccount}>Receiver’s Account:</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.enterReceiversAccount}>
                Enter receiver’s account address
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild1} />
          <div className={styles.payUsingtronlink}>Pay usingTronlink</div>
        </div>
        <div className={styles.scanPay}>{`Scan & Pay`}</div>
        <div className={styles.groupDiv}>
          <div className={styles.groupInner} />
          <div className={styles.wrapperRectangle8}>
            <img
              className={styles.wrapperRectangle8Child}
              alt=""
              src="/rectangle-8@2x.png"
            />
          </div>
        </div>
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <div className={styles.payonweb}>
              <b className={styles.pow}>payonweb</b>
            </div>
            <div className={styles.faAngleDown}></div>
            <div className={styles.faAngleDown1}></div>
            <div className={styles.faAngleDown2}></div>
            <b className={styles.about}>About us</b>
            <b className={styles.resources}>Resources</b>
            <b className={styles.industries}>Industries</b>
            <b className={styles.products}>Products</b>
            <div className={styles.loginParent}>
              <div className={styles.login}>LOGIN</div>
              <div className={styles.bookDemoWrapper}>
                <div className={styles.bookDemo}>BOOK DEMO</div>
              </div>
              <div className={styles.signupWrapper}>
                <div className={styles.bookDemo}>SIGNUP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.frameChild2} />
    </div>
  );
};

export default Frame;
