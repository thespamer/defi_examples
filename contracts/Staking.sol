// contracts/Staking.sol
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Staking {
    ERC20 public stakingToken;
    mapping(address => uint256) public stakedAmounts;
    mapping(address => uint256) public rewards;

    uint256 public rewardRate = 100;

    constructor(address _stakingToken) {
        stakingToken = ERC20(_stakingToken);
    }

    function stake(uint256 amount) public {
        stakingToken.transferFrom(msg.sender, address(this), amount);
        stakedAmounts[msg.sender] += amount;
        rewards[msg.sender] += amount * rewardRate;
    }

    function claimRewards() public {
        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;
        stakingToken.transfer(msg.sender, reward);
    }
}

