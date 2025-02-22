import type { RenderFunction } from 'vue';

/**
 * @zh 选项值
 * @en Option
 */
export type OptionValue = string | number | Record<string, unknown>;

export interface OptionValueWithKey {
  value: OptionValue;
  key: string;
}

export interface OptionData {
  /**
   * @zh 选项值
   * @en Option Value
   */
  value: OptionValue;
  /**
   * @zh 选项内容
   * @en Option content
   */
  label: string;
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh 选项对应的多选标签的属性
   * @en Props of the multi-select label corresponding to the option
   */
  tagProps?: any;
  /**
   * @zh 自定义渲染
   * @en Custom Render
   */
  render?: RenderFunction;

  [other: string]: any;
}

export interface GroupOption {
  /**
   * @zh 是否为选项组
   * @en Whether it is an option group
   */
  isGroup: true;
  /**
   * @zh 选项组标题
   * @en Option group title
   */
  label: string;
  /**
   * @zh 选项组中的选项
   * @en Options in the option group
   */
  options: Option[];

  [other: string]: any;
}

/**
 * @zh 选项
 * @en Option
 */
export type Option = string | number | OptionData | GroupOption;

export interface OptionInfo extends OptionData {
  /**
   * @zh 选项的索引
   * @en Option index
   */
  index?: number;
  /**
   * @zh 选项的键值
   * @en Option key
   */
  key: string;
  /**
   * @zh 选项的来源
   * @en Source of option
   */
  origin: 'slot' | 'options' | 'extraOptions';
}

export interface GroupOptionInfo extends GroupOption {
  key: string;
  options: (OptionInfo | GroupOptionInfo)[];
}

/**
 * @zh 筛选
 * @en Filter
 */
export type FilterOption =
  | boolean
  | ((inputValue: string, optionInfo: OptionInfo) => boolean);
