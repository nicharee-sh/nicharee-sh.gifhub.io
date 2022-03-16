const printGroupName = (groupNo) => {
    let groupName;

    if (groupNo === 1) {
        groupName = 'Pokkii';
    }else if (groupNo === 2) {
        groupName = 'ปาท่องโก๋';
    }else if (groupNo === 3) {
        groupName = 'ติวกระตุกจิต';
    }else if (groupNo === 4) {
        groupName = 'สี่ไม่ซี้';
    }else if (groupNo === 5) {
        groupName = 'Laugh Tale';
    }else if (groupNo === 6) {
        groupName = 'ซานตา';
    }else if (groupNo === 7) {
        groupName = 'สายลับ เจมส์บอนด์';
    }else if (groupNo === 8) {
        groupName = 'Infinity';
    }else if (groupNo === 10) {
        groupName = 'Ben Ten';
    }else if (groupNo === 11) {
        groupName = 'เต้าหู้';
    }else if (groupNo === 12) {
        groupName = 'แป้งเย็น';
    }else {
        groupName = 'พี่นัน';
    }
    console.log('Your Group Name =', groupName)
  }
  