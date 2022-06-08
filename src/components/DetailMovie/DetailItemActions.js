import React from 'react';
import clsx from 'clsx';
import styles from './DetailMovie.module.css';

function DetailItemActions() {
    return (
        <div className={`${clsx(styles.detailMovie_actions)} mt-2`}>
            <div
                className={`${clsx(
                    styles.detailMovie_action_item,
                    styles.action_play
                )} flex-center`}
            >
                <div
                    className={`${clsx(
                        styles.detailMovie_action_item_icon
                    )} mr-2`}
                >
                    <i class='fa-solid fa-play'></i>
                </div>
                <div className={`${clsx(styles.detailMovie_action_item_text)}`}>
                    play
                </div>
            </div>
            <div
                className={`${clsx(
                    styles.detailMovie_action_item,
                    styles.action_trailer
                )} flex-center`}
            >
                <div
                    className={`${clsx(
                        styles.detailMovie_action_item_icon
                    )} mr-2`}
                >
                    <i class='fa-solid fa-play'></i>
                </div>
                <div className={`${clsx(styles.detailMovie_action_item_text)}`}>
                    trailer
                </div>
            </div>
            <div
                className={`${clsx(
                    styles.detailMovie_action_item,
                    styles.action_plus
                )} flex-center`}
            >
                <div className={`${clsx(styles.detailMovie_action_item_icon)}`}>
                    <i class='fa-solid fa-plus'></i>
                </div>
            </div>
            <div
                className={`${clsx(
                    styles.detailMovie_action_item,
                    styles.action_add_friend
                )} flex-center`}
            >
                <div className={`${clsx(styles.detailMovie_action_item_icon)}`}>
                    <i class='fa-solid fa-user-group'></i>
                </div>
            </div>
        </div>
    );
}

export default DetailItemActions;
