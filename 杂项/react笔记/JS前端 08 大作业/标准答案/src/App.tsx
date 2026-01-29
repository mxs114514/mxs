import { type FC, type Key, type ReactNode, useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import {
    Button,
    Card,
    Col,
    DatePicker,
    Flex,
    Form,
    Input,
    InputNumber,
    Layout,
    Menu,
    Row,
    Segmented,
    Select,
    Typography,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import dayjs, { type Dayjs } from 'dayjs';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: ReactNode, key: Key, children?: MenuItem[]): MenuItem {
    return {
        key,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('User', 'sub1', [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9'),
];

type ExpenseBillType = '购物' | '餐饮' | '交通' | '其他' | '投资';
type IncomeBillType = '工资' | '奖金' | '投资';

interface BaseBill {
    name: string;
    amount: number;
    date: Date;
    description?: string;
}

interface Income extends BaseBill {
    type: IncomeBillType;
}
interface Expense extends BaseBill {
    type: ExpenseBillType;
}

type Bill = Income | Expense;

const initialBills: Bill[] = [
    {
        type: '工资',
        name: '工资',
        amount: 10000,
        date: dayjs().subtract(1, 'hour').toDate(),
        description: '月底工资',
    },
    {
        type: '购物',
        name: '购物',
        amount: 1000,
        date: dayjs().subtract(2, 'day').toDate(),
        description: '买了一口锅子',
    },
    {
        type: '餐饮',
        name: '餐饮',
        amount: 200,
        date: dayjs().subtract(3, 'day').toDate(),
        description: '吃了一顿牛肉煲',
    },
    {
        type: '交通',
        name: '交通',
        amount: 50,
        date: dayjs().subtract(1, 'month').toDate(),
        description: '打车回家',
    },
    {
        type: '其他',
        name: '其他',
        amount: 500,
        date: dayjs().subtract(2, 'month').toDate(),
        description: '买了一本书',
    },
    {
        type: '奖金',
        name: '奖金',
        amount: 1000,
        date: dayjs().subtract(1, 'year').toDate(),
        description: '年度牛马奖',
    },
    {
        type: '投资',
        name: '投资',
        amount: 2000,
        date: dayjs().subtract(2, 'year').toDate(),
        description: '重仓 AAPL',
    },
];

function chunk<T>(arr: Array<T>, size: number) {
    const res: Array<Array<T>> = [[]];
    for (const item of arr) {
        const last = res.at(-1)!;
        if (last.length < size) {
            last.push(item);
        } else {
            res.push([item]);
        }
    }
    return res;
}

const App: FC = () => {
    const [bills, setBills] = useState<Bill[]>(initialBills);

    const [collapsed, setCollapsed] = useState(false);

    const [type, setType] = useState<IncomeBillType | ExpenseBillType>('工资');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState<Dayjs>(dayjs());
    const [description, setDescription] = useState('');

    const [selectedType, setSelectedType] = useState<
        IncomeBillType | ExpenseBillType | 'all'
    >('all');
    const [range, setRange] = useState<'day' | 'month' | 'year' | 'unset'>(
        'unset',
    );

    const filterd = useMemo(() => {
        return bills.filter((bill) => {
            const isTypeMatch =
                selectedType === 'all' || bill.type === selectedType;
            const isDateMatch =
                range === 'unset' ||
                dayjs(bill.date).isAfter(dayjs().subtract(1, range));
            return isTypeMatch && isDateMatch;
        });
    }, [bills, selectedType, range]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className='demo-logo-vertical' />
                <Menu
                    theme='dark'
                    defaultSelectedKeys={['1']}
                    mode='inline'
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        background: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography.Title level={3}>你的记账本</Typography.Title>
                </Header>
                <Content style={{ margin: '16px' }}>
                    <Flex>
                        <Form style={{ width: '300px' }}>
                            <Form.Item label='类型'>
                                <Select
                                    options={[
                                        '工资',
                                        '奖金',
                                        '投资',
                                        '购物',
                                        '餐饮',
                                        '交通',
                                        '其他',
                                    ].map((value) => ({
                                        label: value,
                                        value,
                                    }))}
                                    value={type}
                                    onChange={(v) => {
                                        setType(v);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label='价格'>
                                <InputNumber
                                    value={amount}
                                    onChange={(v) => {
                                        if (v) {
                                            setAmount(v);
                                        }
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label='名称'>
                                <Input
                                    value={name}
                                    onChange={(e) => {
                                        if (e) {
                                            setName(e.target.value);
                                        }
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label='日期'>
                                <DatePicker
                                    value={date}
                                    onChange={(v) => {
                                        if (v) {
                                            setDate(v);
                                        }
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label='描述'>
                                <Input
                                    value={description}
                                    onChange={(e) => {
                                        if (e) {
                                            setDescription(e.target.value);
                                        }
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    onClick={() => {
                                        setBills([
                                            ...bills,
                                            {
                                                type,
                                                name,
                                                amount,
                                                date: date.toDate(),
                                                description,
                                            },
                                        ]);
                                        setAmount(0);
                                        setName('');
                                        setDate(dayjs());
                                        setDescription('');
                                    }}
                                >
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                        <div style={{ marginLeft: '100px' }}>
                            <Typography.Title level={3}>
                                过滤器
                            </Typography.Title>
                            <Flex vertical>
                                <FormItem label='时间'>
                                    <Segmented
                                        options={[
                                            'day',
                                            'month',
                                            'year',
                                            'unset',
                                        ]}
                                        value={range}
                                        onChange={setRange}
                                    />
                                </FormItem>
                                <FormItem label='分类'>
                                    <Segmented
                                        options={[
                                            '工资',
                                            '奖金',
                                            '投资',
                                            '购物',
                                            '餐饮',
                                            '交通',
                                            '其他',
                                            'all',
                                        ]}
                                        value={selectedType}
                                        onChange={setSelectedType}
                                    />
                                </FormItem>
                            </Flex>
                        </div>
                    </Flex>
                    <div>
                        {chunk(filterd, 4).map((row) => (
                            <Row key={Math.random()}>
                                {row.map((bill) => (
                                    <Col span={6} key={bill.name}>
                                        <Card
                                            title={bill.name}
                                            style={{ margin: '16px' }}
                                        >
                                            <p>金额: {bill.amount}</p>
                                            <p>
                                                日期:
                                                {bill.date.toLocaleDateString()}
                                            </p>
                                            <p>{bill.description}</p>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </div>
                </Content>
                <Footer>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
