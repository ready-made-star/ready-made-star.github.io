import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd-country-phone-input/dist/index.css';

function PhoneNumber() {
    const getFlag = (short) => {
        const data = require(`world_countries_lists/data/flags/24x24/${short.toLowerCase()}.png`);
        // for dumi
        if (typeof data) {
            return data;
        }
        // for CRA
        return data.default;
    };
    return (
        <>
            <div>Phone</div>
            <ConfigProvider
                locale={en}
                areaMapper={(area) => {
                    return {
                        ...area,
                        emoji: (
                            <img
                                alt="flag"
                                style={{ width: 18, height: 18, verticalAlign: 'sub' }}
                                src={getFlag(area.short)}
                            />
                        ),
                    };
                }}
            >
                <CountryPhoneInput
                    style={{ margin: '8px 0 20px' }}
                    defaultValue={{ short: 'US' }}
                    placeholder="233 225 4567"
                />
            </ConfigProvider>
        </>
    )
}
export default PhoneNumber;